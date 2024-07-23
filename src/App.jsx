import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { storage } from "./configs/firebaseConfig";
import { message, Spin } from "antd";
import CustomeInput from "./components/CustomeInput";

export default function App() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    console.log("e.target.files[0]: ", e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("File inValid");
      return;
    }

    // Upload
    try {
      // Mở Spin
      setIsLoading(true);

      // Tạo tham chiếu đến thư mục chứa hình ảnh sẽ upload trên firebase storage
      const imageListRef = ref(storage, "images/");

      // Xác định vị trí lưu hình ảnh
      const imageRef = ref(imageListRef, file.name);

      // Tiến hành tải hình ảnh lên
      await uploadBytes(imageRef, file);

      // Lấy url từ firebase sau khi upload xong
      const downloadUrl = await getDownloadURL(imageRef);

      setUrl(downloadUrl);

      // Tắt Spin
      setIsLoading(false);

      message.success("Upload ảnh thành công");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    if (!url) {
      alert("Image invalid");
    } else {
      console.log("Submited");
    }
  };

  return (
    <div>
      {isLoading && <Spin />}
      <CustomeInput type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
