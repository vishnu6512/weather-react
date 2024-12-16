function BackgroundImage({ backgroundImage }) {
    return (
      <div
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      ></div>
    );
  }
  
  export default BackgroundImage;
  