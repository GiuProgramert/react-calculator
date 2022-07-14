const textarea_styles = {
  resize: "none",
};

function Display({ children }) {
  return (
    <textarea disabled style={textarea_styles} value={children}>
    </textarea>
  );
}

export default Display;
