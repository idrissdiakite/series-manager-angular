export class Comment {

    private _publishedDate: Date;
    private _author: string;
    private _body: string;

    private _id: number;

    constructor(publishedDate: Date, author: string, body: string, id?: number) {
        if (typeof this.id === 'number') {
            this._id = id;
        }
        this._id = id;
        this._publishedDate = new Date();
        this._author = author;
        this._body = body;
    }

    /**
     * Getter publishedDate
     * @return {Date}
     */
    public get publishedDate(): Date {
        return this._publishedDate;
    }

    /**
     * Getter author
     * @return {string}
     */
    public get author(): string {
        return this._author;
    }

    /**
     * Getter body
     * @return {string}
     */
    public get body(): string {
        return this._body;
    }

    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Setter publishedDate
     * @param {Date} value
     */
    public set publishedDate(value: Date) {
        this._publishedDate = value;
    }

    /**
     * Setter author
     * @param {string} value
     */
    public set author(value: string) {
        this._author = value;
    }

    /**
     * Setter body
     * @param {string} value
     */
    public set body(value: string) {
        this._body = value;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

}