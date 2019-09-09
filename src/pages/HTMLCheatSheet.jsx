import React from "react";
import Element from "../components/Element/Element";

const headings = [
  "<h1>Heading 1</h1>",
  "<h2>Heading 2</h2>",
  "<h3>Heading 3</h3>",
  "<h4>Heading 4</h4>",
  "<h5>Heading 5</h5>",
  "<h6>Heading 6</h6>"
];

const ul = [
  "<ul>",
  "<li>item I</li>",
  "<li>item II</li>",
  "<li>item III</li>",
  "</ul>"
];

const ol = [
  "<ol>",
  "<li>item I</li>",
  "<li>item II</li>",
  "<li>item III</li>",
  "</ol>"
];

const a = ['<a href="/about">This is an Link to the about Page</a>'];

const aTab = [
  '<a href="/about" rel="noopener noreferrer" target="_blank">Open about in new Tab</a>'
];

const p = [
  "<p>error excepturi harum voluptas placeat, sequi enim voluptatum, consequatur itaque doloribus nesciunt architecto mollitia earum rerum deleniti quibusdam exercitationem?</p>",
  "<p>error excepturi harum voluptas placeat, sequi enim voluptatum, consequatur itaque doloribus nesciunt architecto mollitia earum rerum deleniti quibusdam exercitationem?</p>"
];

const table = [
  "<table>",
  "<tr>",
  "<th>Name</th>",
  "<th>Bootcamp</th>",
  "<th>City</th>",
  "</tr>",
  "<tr>",
  "<td>Jose Perez</td>",
  "<td>FullStack WebDev</td>",
  "<td>Madrid</td>",
  "</tr>",
  "</table>"
];

const img = ['<img src="/IMG_2215.png" alt="webDevDuck" width=100 >'];

const hr = ["<hr>"];

const comment = ["<!--", "<p>As a comment I am not rendered</p>", "-->"];

const span = ["<span>I am In Line</span>", "<span>Me too.</span>"];

const div = [
  "<div>",
  "<span>I should be In Line</span>",
  "</div>",
  "<div>",
  "<span>Me too.</span>",
  "</div>"
];

export default function HTMLCheatSheet() {
  return (
    <div className="cheatsheet">
      <Element render={headings} title="Headings" />
      <Element render={ul} title="Unordered List" />
      <Element render={ol} title="Ordered List" />
      <Element render={a} title="Anchor Tag" />
      <Element render={aTab} title="Anchor Tag [Open in New Tab]" />
      <Element render={p} title="Paragraph" />
      <Element render={table} title="Table" />
      <Element render={img} title="Image" />
      <Element render={hr} title="Horizontal Line" />
      <Element render={comment} title="Comment" />
      <Element render={span} title="Span" />
      <Element render={div} title="Division" />
    </div>
  );
}
