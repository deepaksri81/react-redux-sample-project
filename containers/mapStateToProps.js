const mapStateToHeaderProps = state => {
  return {
    info: state.info
  }
}

const mapStateToContactProps = state => {
  return {
    info: state.info
  }
}

const mapStateToAboutProps = state => {
  return {
    description: state.description
  }
}

const mapStateToStrengthsProps = state => {
  return {
    strengths: state.strengths
  }
}

const mapStateToProjectsProps = state => {
  return {
    projects: state.projects
  }
}

const mapStateToProjectDetailProps = (state, ownProps) => {
  let match = state.projects.filter(x => x.id === ownProps.params.id)[0]
  let data = {
    project: match ? match : new ProjectInfo(),
    related_projects:  match ? state.projects.filter(x => x.id !== match.id && x.category === match.category) : []
  }
  return data;
}