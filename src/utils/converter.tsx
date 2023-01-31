import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import { Button } from "@components/atoms";

import axios from "axios";

type Props = {};

const AboutPage = () => {
  const { t } = useTranslation("common");

  const onButtonClicked = () => {};

  const convertFileToBase64 = (file: any) => {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (response) {
        resolve({
          message: "işleme tamam!",
          file: response.target?.result,
        });
      };

      reader.onerror = function (error) {
        reject("Bir sıkıntı var...");
      };
    });
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!event.target.files) return;

      const formData = new FormData();
      formData.append("image", event.target.files[0]);
      axios.post("http://localhost:3000/api/convert", formData).then((res) => {
        console.log("res: ", res);

        var a = document.createElement("a");
        a.href = "data:image/webp;base64," + res.data.file;
        a.download = "convertedWebp.webp";
        a.click();
      });
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div>
      <input
        multiple
        type="file"
        name="test"
        id="test"
        onChange={onFileChange}
      />
      <Button onClick={onButtonClicked} type="primary">
        {t("about")}
      </Button>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "tr", ["common"])),
  },
});

export default AboutPage;