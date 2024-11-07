

export default function json2html(data) {
    const headers = Array.from(new Set(data.flatMap(Object.keys))); // Get all unique headers
    let html = `<table data-user="yvishnuvamsith@gmail.com">
      <thead>
        <tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>
      </thead>
      <tbody>
        ${data.map(row => 
          `<tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>`
        ).join('')}
      </tbody>
    </table>`;
    return html;
  }
  