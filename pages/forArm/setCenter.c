export default function setCenter() {
  const Container = {
    width: "100vw", // *! ห้ามยุ่ง
    height: "100vh", // *? ตั้งความสูงของ Section
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center", // *? ตั้งชิดซ้าย (flex-start) | ชิดขวา (flex-end)
    alignItems: "center", // *? ตั้งชิดบน (flex-start) | ชิดล่าง (flex-end)
  };
  const Contant = {
    width: 1024, // *? ตั้งความกว้าง Container ข้างใน
    color: "#FFF",
    padding: '0 24px'
  };

  return (
    <>
      <div style={Container}>
        <div style={Contant}>
          <h1>TITLE EIEI</h1>
          <h3>Sub title</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s
          </p>
        </div>
      </div>
    </>
  );
}
