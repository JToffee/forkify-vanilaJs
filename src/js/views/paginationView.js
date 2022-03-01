import View from './view.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // console.log(this._data.page);
    const curPage = this._data.page;

    // console.log(numPages);
    // console.log(this._data);
    //Page 1 and there are other pages
    if (curPage === 1 && numPages > 1)
      return `
    <button data-goto ='${
      curPage + 1
    }' class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>
    `;
    //last page

    if (curPage === numPages && numPages > 1)
      return `
    <button data-goto ='${
      curPage - 1
    }' class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
    </button>
    `;
    //other page

    if (curPage < numPages)
      return `
    <button data-goto ='${
      curPage - 1
    }' class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
        </button>
    <button data-goto ='${
      curPage + 1
    }' class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>
    `;
    //Page 1 and there are no other pages
    return '';
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      // console.log(this._data);
      const btn = e.target.closest('.btn--inline');
      //   console.log(btn);
      if (!btn) return;
      const goto = +btn.dataset.goto;
      // console.log(goto);
      handler(goto);
    });
  }
}
export default new PaginationView();
