import "./index.html";
import "./styles/css/styles.css";
import { api } from "./utils/Api.js";
import { formatDate } from "./utils/formatDate.js";
import {
  searchForm,
  searchInput,
  noResultsMessage,
  errorMessage,
  reposList,
} from "./utils/constants";

// Удалить со страницы результаты предыдущего поиска
function removeLastResults(list) {
  const lastResultsItems = list.querySelectorAll(".item");
  lastResultsItems.forEach((el) => {
    el.remove();
  });
}

// Поисковый запрос на сервер
function searchRepos(query) {
  api
    .searchRepos(query)
    .then((res) => {
      const repos = res.items.slice(0, 10).reverse();
      if (res.total_count === 0) {
        noResultsMessage.style.display = "block";
        removeLastResults(reposList);
      } else {
        removeLastResults(reposList);
        repos.map((el) => {
          const item = {
            ownerAvatar: el.owner.avatar_url,
            title: el.full_name,
            url: el.html_url,
            description: el.description || "No description",
            updatedAt: formatDate(el.updated_at),
            createdAt: formatDate(el.created_at),
            visibility: el.private,
          };
          createItem(item);
        });
      }
    })
    .catch((err) => {
      console.log(err);
      errorMessage.textContent = "Unexpected error, try again later";
      errorMessage.style.display = "block";
    });
}

// Отправить форму
function submitHandler(e) {
  e.preventDefault();

  if (!searchInput.validity.valid) {
    errorMessage.textContent = searchInput.validationMessage;
    errorMessage.style.display = "block";
  } else {
    searchRepos(searchInput.value);
    localStorage.setItem("searchValue", JSON.stringify(searchInput.value));
  }
}

// Клонировать шаблон карточки
const itemTemplate = document.querySelector("#tmpl-item").content;

function cloneCommentTemplate(item) {
  const reposElement = itemTemplate.cloneNode(true);

  reposElement.querySelector(".item__owner-avatar").src = item.ownerAvatar;
  reposElement.querySelector(".item__link").textContent = item.title;
  reposElement.querySelector(".item__link").href = item.url;
  reposElement.querySelector(".item__description").textContent =
    item.description;
  reposElement.querySelector("#item-update").textContent = item.updatedAt;
  reposElement.querySelector("#item-create").textContent = item.createdAt;

  if (item.visibility) {
    reposElement
      .querySelector(".item__visibility")
      .classList.add("item__type_private");
  } else {
    reposElement
      .querySelector(".item__visibility")
      .classList.add("item__type_public");
  }

  return reposElement;
}

// Создать новую карточку из клонированного шаблона
function createItem(item) {
  const newRepoItem = cloneCommentTemplate(item);
  reposList.prepend(newRepoItem);
}

// Слушатели событий
searchForm.addEventListener("submit", submitHandler);

searchInput.addEventListener("input", (e) => {
  e.target;
  noResultsMessage.style.display = "none";
  errorMessage.style.display = "none";
});

// Запрос на сервер после перезагрузки страницы
window.onload = function () {
  if (localStorage.getItem("searchValue")) {
    const value = JSON.parse(localStorage.getItem("searchValue"));
    searchInput.value = value;
    searchRepos(value);
  }
};
