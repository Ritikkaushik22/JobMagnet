import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./YouTubeLinks.css";

const YouTube = () => {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");
  const [editLinkId, setEditLinkId] = useState(null);
  const [editLinkUrl, setEditLinkUrl] = useState("");

  const addLink = () => {
    const newLinkItem = { id: Date.now(), url: newLink };
    setLinks([...links, newLinkItem]);
    setNewLink("");
  };

  const updateLink = (id) => {
    setLinks(
      links.map((link) =>
        link.id === id ? { ...link, url: editLinkUrl } : link
      )
    );
    setEditLinkId(null);
    setEditLinkUrl("");
  };

  const deleteLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">YouTube Links</h1>
      <div className="input-container">
        <input
          type="text"
          value={newLink}
          onChange={(e) => setNewLink(e.target.value)}
          placeholder="Enter YouTube URL"
          className="input"
        />
        <button onClick={addLink} className="button">
          Add Link
        </button>
      </div>
      <ul className="links-list">
        {links.map((link) => (
          <li key={link.id} className="link-item">
            {editLinkId === link.id ? (
              <input
                type="text"
                value={editLinkUrl}
                onChange={(e) => setEditLinkUrl(e.target.value)}
                className="input"
              />
            ) : (
              <span className="link">{link.url}</span>
            )}
            <div className="icons">
              {editLinkId === link.id ? (
                <button onClick={() => updateLink(link.id)} className="button">
                  Save
                </button>
              ) : (
                <FaEdit
                  onClick={() => {
                    setEditLinkId(link.id);
                    setEditLinkUrl(link.url);
                  }}
                  className="icon"
                />
              )}
              <FaTrash onClick={() => deleteLink(link.id)} className="icon" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTube;
