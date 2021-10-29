import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const Uploader = ({
  text,
  submitText,
  acceptFiles,
  maxFiles,
  minSizeBytes,
  maxSizeBytes,
  onSubmit,
}) => {
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  return (
    <Dropzone
      submitButtonContent={submitText}
      inputContent={text}
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={onSubmit}
      accept={acceptFiles}
      maxFiles={maxFiles}
      minSizeBytes={minSizeBytes}
      maxSizeBytes={maxSizeBytes}
    />
  );
};

export default Uploader;
