function getRootReducer() {
    return Redux.combineReducers({
                info: basicInfoReducer,
                description: aboutReducer,
                strengths: strengthsReducer,
                projects: projectsReducer
            })
}

function basicInfoReducer(info, action) {
    if (typeof info === 'undefined') {
        return portfolioDataOnServer.info.clone();
    }
    return info.clone();
}

function aboutReducer(desc, action) {
    if (typeof desc === 'undefined') {
        return portfolioDataOnServer.description.clone();
    }
    return desc.clone();
}

function strengthsReducer(strengths, action) {
    let items = typeof strengths === 'undefined' ? portfolioDataOnServer.strengths : strengths;

    return items.map((x) => x.clone());
}

function projectsReducer(projects, action) {
    let items = typeof projects === 'undefined' ? portfolioDataOnServer.projects : projects;

    return items.map((x) => x.clone());
}