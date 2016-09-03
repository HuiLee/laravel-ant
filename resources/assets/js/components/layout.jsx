import React from 'react';

export default function Layout(props) {
  return (
    <article className="window-frame focus">
      <header className="top-bar">
        <div className="controls">
          <div className="control close"/>
          <div className="control minify"/>
          <div className="control expand"/>
        </div>
      </header>
      <section className="window-content">
        {props.children}
      </section>
    </article>
  );
}