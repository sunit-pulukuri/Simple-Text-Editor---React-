import React, { useState} from "react";
// import PropTypes from "prop-types";
// import Alert from "./Alert";

export default function Textarea(props) {
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleUpClick = () => {
    if (text === "") {
      props.showAlert("Enter text first!", "warning");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase", "success");
    }
  };
  const handleDownClick = () => {
    if (text === "") {
      props.showAlert("Enter text first!", "warning");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowecase", "success");
    }
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  function isUpperCase(str) {
    return str === str.toUpperCase();
  }
  function isLowerCase(str) {
    return str === str.toLowerCase();
  }

  function checkCase() {
    if (isLowerCase(text)) {
      return "Lowercase";
    } else if (isUpperCase(text)) {
      return "Uppercase";
    }

    return "Mixed";
  }
  const wordLength = () => {
    if (text.endsWith(" ")) {
      return text.split(" ").length - 1;
    } else if (text.trim() === false) {
      return 0;
    }
    return text.split(" ").length;
  };
  const characterCountWithoutSpaces = () => {
    const stringWithoutSpaces = text.replace(/\s/g, "");
    return stringWithoutSpaces.length;
  };

  const findUrl = () => {
    if (text === "") {
      props.showAlert("Enter text first!", "warning");
    } else {
      let strArr = text.split(" ");
      for (let i = 0; i < strArr.length; i++) {
        if (
          strArr[i].toLowerCase().endsWith(".com") ||
          strArr[i].toLowerCase().startsWith("https://") ||
          strArr[i].toLowerCase().startsWith("www")
        ) {
          if (
            !document
              .getElementById("urls")
              .innerText.includes(strArr[i].toLowerCase())
          ) {
            document.getElementById("urls").innerText +=
              strArr[i].toLowerCase() + "\n";
          }
        }
      }
      props.showAlert("URLs have been scanned", "success");
    }
  };

  const clearText = () => {
    if (text === "") {
      props.showAlert("Nothing to clear!", "warning");
    } else {
      setText("");
      setSearchTerm("");
      document.getElementById("urls").innerText = "";
      document.getElementById("searchResult").innerText = "";
    }
  };

  const handleSearchChange = (e) => {
    if (text === "") {
      props.showAlert("Enter text first!", "warning");
    } else {
      setSearchTerm(e.target.value);
      props.showAlert("Search complete!", "success");
    }
  };

  const handleSearch = () => {
    let count = 0;
    let newString = text.split(" ");
    for (let z = 0; z < newString.length; z++) {
      if (newString[z].toLowerCase() === searchTerm.toLowerCase() || newString[z].toLowerCase() === searchTerm.toLowerCase()+",") {
        count++;
      }
    }
    document.getElementById("searchResult").innerText = "";
    document.getElementById(
      "searchResult"
    ).innerText = `Found ${count} occurences of the word '${searchTerm}'`;
  };

  const handleSpaces = () => {
    let newText = text.split(/[ \n]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces fixed!", "success");
  };
  return (
    <>
      <div style={props.myStyle}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            style={props.myStyle}
            onChange={handleChange}
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={findUrl}>
          <a href="#urls">Find URLs in the text</a>
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSpaces}>
          {" "}
          Remove Extra spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="container" style={props.myStyle}>
        <h1>Text Summary</h1>
        <p>
          Words: {wordLength()} | Characters with spaces: {text.length} |
          Characters without spaces: {characterCountWithoutSpaces()} | Current
          Case: {checkCase()}
        </p>
        <p>Average time taken to read: {0.008 * wordLength()}</p>
        <b>
          {" "}
          <h2 className="my-2">URLs we found in your text: </h2>{" "}
        </b>

        <p id="urls"></p>

        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ width: "300px" }}
        />
        <button
          className="btn btn-outline-success my-3"
          type="submit"
          onClick={handleSearch}
        >
          Search
        </button>
        <p id="searchResult"></p>
      </div>
    </>
  );
}
