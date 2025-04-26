import { useState } from "react";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");

  const handleAddNote = () => {
    if (note.trim() !== "" && selectedColor !== "") {
      const newNote = {
        id: Date.now(),
        text: note,
        color: selectedColor,
      };
      setNotes([...notes, newNote]);
      setNote("");
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        textAlign: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0", // Hafif gri arka plan
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "20px",
          color: "#2d3436",
        }}
      >
        NotesApp
      </h1>

      {/* Not yazma alanı */}
      <textarea
        placeholder="Enter your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{
          width: "400px",
          height: "100px",
          fontSize: "16px",
          padding: "10px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          resize: "none",
          marginBottom: "15px",
        }}
      />

      {/* Renk seçimi */}
      <div style={{ margin: "15px" }}>
        {["#e17055", "#74b9ff", "#55efc4", "#ffeaa7", "#fab1a0"].map(
          (color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              style={{
                backgroundColor: color,
                width: "40px",
                height: "40px",
                margin: "5px",
                border: selectedColor === color ? "3px solid black" : "none",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            ></button>
          )
        )}
      </div>

      {/* Ekle butonu */}
      <button
        onClick={handleAddNote}
        style={{
          backgroundColor: "#00b894",
          color: "white",
          padding: "12px 30px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        ADD
      </button>

      {/* Notları Listele */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: "center",
          width: "100%",
        }}
      >
        {notes.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: item.color,
              padding: "15px",
              width: "400px",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
