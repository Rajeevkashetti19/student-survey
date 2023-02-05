export class Model{

    public fullName: string;
    public address: string;
    public city: string;
    public state: string;
    public zip: string;
    public mobile: string;
    public email: string;
    public dateOfSurvey: string;
    public likes: string;
    public sources: string;
    public recommendation: string

    constructor(
       fullName: string,
       address: string,
       city: string,
       state: string,
       zip: string,
       mobile: string,
       email: string,
       dateOfSurvey: string,
       likes: string,
       sources: string,
       recommendation: string 
    ){
        this.fullName=fullName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.mobile=mobile;
        this.email=email;
        this.dateOfSurvey=dateOfSurvey;
        this.likes=likes;
        this.sources=sources;
        this.recommendation=recommendation;
    }

    public getFullname(): string {
        return this.fullName;
    }

    public setFullname(fullname: string): void {
        this.fullName = fullname;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getCity(): string {
        return this.city;
    }

    public setCity(city: string): void {
        this.city = city;
    }

    public getState(): string {
        return this.state;
    }

    public setState(state: string): void {
        this.state = state;
    }

    public getZip(): string {
        return this.zip;
    }

    public setZip(zip: string): void {
        this.zip = zip;
    }

    public getMobile(): string {
        return this.mobile;
    }

    public setMobile(mobile: string): void {
        this.mobile = mobile;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getDateOfSurvey(): string {
        return this.dateOfSurvey;
    }

    public setDateOfSurvey(dateOfSurvey: string): void {
        this.dateOfSurvey = dateOfSurvey;
    }

    public getLikes(): string {
        return this.likes;
    }

    public setLikes(likes: string): void {
        this.likes = likes;
    }

    public getSources(): string {
        return this.sources;
    }

    public setSources(sources: string): void {
        this.sources = sources;
    }

    public getRecommendation(): string {
        return this.recommendation;
    }

    public setRecommendation(recommendation: string): void {
        this.recommendation = recommendation;
    }

}