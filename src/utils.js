export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}) {
    if (typeof styles === 'string') return styles;
    const toString = key => `${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join('; ');
}

export function block(type) {
    return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="mb-3">
        <input class="form-control" name="value" placeholder="value">
      </div>
      <div class="mb-3">
        <input class="form-control" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary">Добавить</button>
    </form>
    <hr />
  `
}