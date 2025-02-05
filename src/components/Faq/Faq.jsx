import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./faq.css";

export default function Faq({ title, desc }) {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div>
      <div className="faqs-container">
        <div className="faqs-content">
          <div className="faqs-main" onClick={() => setOpen(!open)}>
            <div className="faqs-left">
              <h1 className="faqs-left-heading">{title}</h1>
            </div>
            <div className="faqs-right">
              {open ? (
                <AiOutlineMinus className="faqs-icon-minus" />
              ) : (
                <AiOutlinePlus className="faqs-icon-plus" />
              )}
            </div>
          </div>
          {open && (
            <div className="faqs-desc">
              <p className="faqs-description">{desc}</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
