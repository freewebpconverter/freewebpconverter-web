import Resizer from "react-image-file-resizer";
import "./App.css";

function App() {
  const onFileChange = async (event) => {
    try {
      const file = event.target.files[0];
      const type = file.type.split("/").pop();
      const name = file.name
        .replace(`.${type.toUpperCase()}`, "")
        .replace(`.${type.toLowerCase()}`, "");
      const image = await resizeFile(file);
      const downloadLink = document.createElement("a");
      const fileName = `${name}.webp`;

      downloadLink.href = image;
      downloadLink.download = fileName;
      downloadLink.click();
    } catch (err) {
      console.log(err);
    }
  };

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        3774,
        5661,
        "WEBP",
        80,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  // const onFileChange2 = (value) => {
  //   var files = value.target.files;
  //   var type = files[0].type.split("/").pop();
  //   var name = files[0].name
  //     .replace(`.${type.toUpperCase()}`, "")
  //     .replace(`.${type.toLowerCase()}`, "");

  //   imageConvert(files, 1280, 719).then((responseFiles) => {
  //     console.log("responseFiles: ", responseFiles);

  //     var file = responseFiles[0];
  //     var blob = new Blob([file]);
  //     var url = URL.createObjectURL(blob);
  //     var downloadLink = document.createElement("a");
  //     var fileName = `${name}.webp`;

  //     downloadLink.href = url;
  //     downloadLink.download = fileName;
  //     downloadLink.click();

  //     // convertBase64(responseFiles, name);
  //   });
  // };

  // const getImageSize = (value) => {
  //   var _URL = window.URL || window.webkitURL;

  //   var files = value.target.files;
  //   var file = value.target.files[0];
  //   var image = new Image();
  //   var objectUrl = _URL.createObjectURL(file);

  //   image.onload = function () {
  //     var fileWidth = this.width;
  //     var fileHeight = this.height;

  //     console.log("file: ", file);

  //     _URL.revokeObjectURL(objectUrl);
  //   };

  //   image.src = objectUrl;
  // };

  // const convertBase64 = (files, name) => {
  //   if (!files || !files[0]) return;

  //   const FR = new FileReader();

  //   FR.addEventListener("load", function (evt) {
  //     downloadFile(evt.target.result, name);
  //   });

  //   FR.readAsDataURL(files[0]);
  // };

  // const downloadFile = (base64, name) => {
  //   const downloadLink = document.createElement("a");
  //   const fileName = `${name}.webp`;

  //   downloadLink.href = base64;
  //   downloadLink.download = fileName;
  //   downloadLink.click();
  // };

  return (
    <div className="App">
      <input
        accept="image/*"
        type="file"
        name="file"
        multiple
        onChange={onFileChange}
      />
    </div>
  );
}

export default App;
