const InternalPanel = ({ children }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default InternalPanel;