import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const Uploader = ({
  text,
  submitText,
  acceptFiles,
  maxFiles,
  minSizeBytes,
  maxSizeBytes,
}) => {
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files);
    allFiles.forEach((f) => f.remove());
  };

  return (
    <Dropzone
      submitButtonContent={submitText}
      inputContent={text}
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept={acceptFiles}
      maxFiles={maxFiles}
      minSizeBytes={minSizeBytes}
      maxSizeBytes={maxSizeBytes}
    />
  );
};

export default Uploader;
