import React from "react";
import Element from '../components/Element/Element'

const headings = ['<h1>Heading 1</h1>','<h2>Heading 2</h2>','<h3>Heading 3</h3>','<h4>Heading 4</h4>','<h5>Heading 5</h5>','<h6>Heading 6</h6>']

const ul = ['<ul>','<li>item I</li>','<li>item II</li>','<li>item III</li>','</ul>']

const ol = ['<ol>','<li>item I</li>','<li>item II</li>','<li>item III</li>','</ol>']

const a = ['<a href="/about">This is an Link to the about Page</a>']

const aTab = ['<a href="/about" rel="noopener noreferrer" target="_blank">Open about in new Tab</a>']

export default function HTMLCheatSheet() {
  return (
    <div className="cheatsheet">
    <Element render={headings} title="Headings" />
    <Element render={ul} title="Unordered List" />
    <Element render={ol} title="Ordered List" />
    <Element render={a} title="Anchor Tag" />
    <Element render={aTab} title="Anchor Tag [Open in New Tab]" />
    </div>
  );
}


