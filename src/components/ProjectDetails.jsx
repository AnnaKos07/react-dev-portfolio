import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "../styles/Project.css";

const ProjectDetails = ({ projects }) => {
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Прокрутка страницы к началу при загрузке компонента
    window.scrollTo(0, 0);
  }, []);



  // Проверяем, есть ли проекты
  if (!projects || projects.length === 0) {
    return <h1>Loading...</h1>;
  }

  // Ищем проект
  const project = projects.find(
    (proj) => proj.name.toLowerCase().replace(/\s+/g, "-") === name
  );

  const goToHome = () => {
    navigate("/");
  };

  // Если проект не найден
  if (!project) {
    return <h1>Project not found</h1>;
  } 

  const backgroundColor = project.backgroundColor || "#FFFFFF";
  const textColor = project.textColor || "#0F1729";

  // Если проект найден
  return (
    <div className="project-details"  style={{ backgroundColor: backgroundColor, color: textColor }}>
      <img class="head-image" src={project.head_image}></img>
      <div className="year">{project.years}</div>
      <div className="project-title custom-title">
        <h1>{project.name}</h1>
      </div>
      <p>{project.short_description}</p>
      <div className="custom-resp">
          {project.responsibilities.map((resp, index) => (
          <div className="resp" key={index}>
              <p>{resp}</p>
          </div>
        ))}
      </div>
      

      {/* Рендерим все поля объекта проекта, исключая ненужные */}
      <div className="project-data">
  {Object.entries(project).map(([key, value]) => {
    // Исключаем рендеринг определенных ключей
    if (["name", "id", "backgroundColor", "textColor", "head_image", "responsibilities", "years", "short_description", "link"].includes(key)) {
      return null;
    }

    // Если ключ содержит "img", рендерим как изображение
    if (key.toLowerCase().includes("img")) {
      return (
        <div className="project-field" key={key}>
          <img src={value} alt={`${project.name} - ${key}`} />
        </div>
      );
    }

    // Если поле - массив, отображаем как список
    if (Array.isArray(value)) {
      return (
        <div className="project-field" key={key}>
          <h4>{key.replace(/_/g, " ")}</h4>
          <ul>
            {value.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }

    // Рендерим текстовое значение
    return (
      <div className="project-field" key={key}>
        <h2>{key.replace(/_/g, " ")}</h2>
        <p>{value}</p>
      </div>
    );
  })}
</div>
      {/* Кнопка для перехода на главную */}
      <button  onClick={goToHome} className="home-button">
          Go to projects
        </button>
    </div>
  );
};

export default ProjectDetails;
