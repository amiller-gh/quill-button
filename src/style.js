const TRANSPARENT_PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
const UPLOAD_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#dae3eb" stroke="#F5F9FC" stroke-width="8" d="M398.1,233.2c0-1.2,0.2-2.4,0.2-3.6c0-65-51.8-117.6-115.7-117.6c-46.1,0-85.7,27.4-104.3,67c-8.1-4.1-17.2-6.5-26.8-6.5c-29.5,0-54.1,21.9-58.8,50.5C57.3,235.2,32,269.1,32,309c0,50.2,40.1,91,89.5,91H224v-80l-48.2,0l80.2-83.7l80.2,83.6l-48.2,0v80h110.3c45.2,0,81.7-37.5,81.7-83.4C480,270.6,443.3,233.3,398.1,233.2z"/></svg>';

export const STYLE = `

.quill-button {
  --accent-color: #3eb0ef;
  display: block;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  position: relative;
  background-color: var(--accent-color);
  text-align: center;
  color: white !important;
  font-weight: 800 !important;
  text-decoration: none !important;
  padding: 10px 24px;
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
  width: fit-content;
  max-width: 100%;
}

.quill-button[data-format=full] {
  margin: 0 0 12px;
  width: 100%;
}
.quill-button[data-format=center] {
  margin: 0 auto 12px;
}
.quill-button[data-format=left] {
  margin: 0 auto 12px 0;
}
.quill-button[data-format=right] {
  margin: 0 0 12px auto;
}

.quill-button:hover {
  outline: 1px solid var(--accent-color);
  outline-radius: 2px;
  outline-offset: 2px;
}

.quill-button:focus-within {
  outline: 2px solid var(--accent-color);
  outline-radius: 2px;
  outline-offset: 2px;
}

.quill-button input.quill-button__href-input {
  position: absolute;
  top: -34px;
  height: 28px;
  width: 280px;
  font-size: 13px;
  left: 50%;
  font-weight: bold;
  transform: translateX(-50%);
  background-color: rgba(0,0,0,.66);
  color: white;
  border-radius: 4px;
  border: 0;
}

.quill-button .quill-button__href-input::-webkit-input-placeholder { color: rgba(255, 255, 255, .55) !important; }
.quill-button .quill-button__href-input:-ms-input-placeholder { color: rgba(255, 255, 255, .55) !important; }
.quill-button .quill-button__href-input::placeholder { color: rgba(255, 255, 255, .55) !important; }

.quill-button .quill-button__format {
  position: absolute;
  height: 32px;
  bottom: -38px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background-color: rgba(0,0,0,.66);
  border-radius: 4px;
  z-index: 2;
}

.quill-button[data-format=left] .quill-button__format,
.quill-button[data-format=left] .quill-button__href-input {
  left: -4px;
  transform: translateX(0%);
}
.quill-button[data-format=right] .quill-button__format,
.quill-button[data-format=right] .quill-button__href-input {
  left: unset;
  right: -4px;
  transform: translateX(0%);
}

.quill-button textarea.quill-button__text-input {
  color: white;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  text-decoration: inherit;
  font-style: inherit;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: inherit;
  white-space: pre-line;
  text-align: inherit;
  line-height: inherit;
  border: 0;
  resize: none;
  overflow: hidden;
}


.quill-button .quill-button__format input {
  --webkit-appearance: none;
  appearance: none;
  width: 1px;
  height: 1px;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  opacity: 0.00001;
}

.quill-button .quill-button__format label {
  width: 32px;
  height: 32px;
  display: flex;
  cursor: pointer;
  --webkit-appearance: none;
  appearance: none;
  border: none;
  color: white;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}
.quill-button .quill-button__format label::before,
.quill-button .quill-button__format label::after {
  display: none !important;
}
.quill-button .quill-button__format label svg {
  fill: currentColor;
  pointer-events: none;
  width: 26px;
  height: 26px;
}
.quill-button .quill-button__format input:checked + label {
  color: var(--accent-color);
}

.quill-button .ql-tooltip { display: none !important; }
.quill-button::before, .quill-button::after { display: none !important; }
`;