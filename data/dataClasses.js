class PortfolioData {
    fromJson(json) {
        this.info = new BasicInfo().fromJson(json.info);
        this.description = new TextBlock().fromJson(json.description);
        this.strengths = json.strengths.map((x) => new TextBlock().fromJson(x));
        this.projects = json.projects.map((x) => new ProjectInfo().fromJson(x));
        return this;
    }

    clone() {
        let data = new PortfolioData();
        data.info = this.info.clone();
        data.description = this.description.clone();
        data.strengths = this.strengths.map((x) => x.clone());
        data.projects = this.projects.map((x) => x.clone());
        return data;
    }
}

class HyperLink {
    fromJson(json) {
        this.title = json.title;
        this.icon = json.icon;
        this.link = json.link;
        this.target = json.target;
        return this;
    }

    clone() {
        let data = new HyperLink();
        data.title = this.title;
        data.icon = this.icon;
        data.link = this.link;
        data.target = this.target;
        return data;
    }
}

class TextBlock {
    fromJson(json) {
        this.title = json.title;
        this.icon = json.icon;
        this.content = json.content;
        if (json.sub_blocks && json.sub_blocks.length)
            this.sub_blocks = json.sub_blocks.map(x => new TextBlock().fromJson(x));
        return this;
    }

    clone() {
        let data = new TextBlock();
        data.title = this.title;
        data.icon = this.icon;
        data.content = this.content;
        if (this.sub_blocks && this.sub_blocks.length)
            data.sub_blocks = this.sub_blocks.map(x => x.clone());
        return data;
    }
}

class BasicInfo {
    fromJson(json) {
        this.title = json.title;
        this.name = json.name;
        this.email = json.email;
        this.skype = json.skype;
        return this;
    }

    clone() {
        let data = new BasicInfo();
        data.title = this.title;
        data.name = this.name;
        data.email = this.email;
        data.skype = this.skype;
        return data;
    }
}

class ProjectInfo {
    fromJson(json) {
        this.id = json.id;
        this.name = json.name;
        this.link = json.link;
        this.category = json.category;
        this.title = json.title;
        this.sub_title = json.sub_title;
        this.image = json.image;
        this.big_image = json.big_image;
        if (json.description)
            this.description = new TextBlock().fromJson(json.description);
        if (json.technologies)
            this.technologies = new TextBlock().fromJson(json.technologies);
        if (json.resources)
            this.resources = json.resources.map(x => new HyperLink().fromJson(x));
        return this;
    }

    clone() {
        let data = new ProjectInfo();
        data.id = this.id;
        data.name = this.name;
        data.link = this.link;
        data.category = this.category;
        data.title = this.title;
        data.sub_title = this.sub_title;
        data.image = this.image;
        data.big_image = this.big_image;
        if (this.description)
            data.description = this.description.clone();
        if (this.technologies)
            data.technologies = this.technologies.clone();
        if (this.resources)
            data.resources = this.resources.map(x => x.clone());
        return data;
    }
}