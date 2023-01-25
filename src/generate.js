const generateTeam = team => {
    const generateManager = manager => {
        return`
    <div class="employee-card">
    <div class="card-header">
      <h2 class="card-name">${manager.getName()}</h2>
      <h4 class="card-title"></i>${manager.getRole()}</h4>
    </div>
    <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">Employee ID: ${manager.getId()}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
          </li>
          <li class="list-group-item">Office Phone: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>`;
    };

    const generateEngineer = engineer => {
        return `
    <div class="employee-card">
    <div class="card-header">
      <h2 class="card-name">${engineer.getName()}</h2>
      <h4 class="card-title"></i>${engineer.getRole()}</h4>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">Employee ID: ${engineer.getId()}</li>
        <li class="list-group-item">
        Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
        </li>
        <li class="list-group-item">
          GitHub:
          <a href="https://github.com/${engineer.getGithub()}"
             target="_blank"
             rel="noopener noreferrer">${engineer.getGithub()}
          </a>
        </li>
      </ul>
    </div>`;
    };

    const generateIntern = intern => {
        return `
    <div class="employee-card">
    <div class="card-header">
      <h2 class="card-name">${intern.getName()}</h2>
      <h4 class="card-title"></i>${intern.getRole()}</h4>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">Employee ID: ${intern.getId()}</li>
        <li class="list-group-item">
          Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a>
        </li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>`;
    };

    const html = [];
        html.push(team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => generateManager(manager)));
        html.push(team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => generateEngineer(engineer))
            .join(""));
        html.push(team
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => generateIntern(intern))
            .join(""));
    return html.join("");
}

module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"/>
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    <header>
        <div class="container-fluid">
            <div class="row">
            <div class="col-12 mb-3 team-heading jumbotron align-middle bg-alert border-bottom">
                <h1 class="mx-auto">My Team</h1>
            </div>
            </div>
        </div>
    </header>
    <body class="container">
        <div class="employee-container">
            <div class="row">
                <div class="team-area col-15 d-flex justify-content-center">${generateTeam(team)}  
                </div>
            </div>
        </div>
    </body>
</html>`;
};
