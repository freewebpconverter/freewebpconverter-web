import { Icon, IconButton, DragBackground } from "@components/atoms";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const DragSection = () => {
  return (
    <DragBackground>
      <IconButton>
        <Icon icon={faInfo} />
      </IconButton>
    </DragBackground>
  );
};

export default DragSection;
