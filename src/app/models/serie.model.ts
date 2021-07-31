import { Comment } from "./comment.model";

export class Serie {

    private _name: string;
    private _firstRelease: Date;
    private _seasonsNumber: number;
    private _description: string;
    private _review: string;
    private _picture: string;

    private _comments: Array<Comment>;
    private _id: number;
  
    static nbId = 1;
  
    constructor(name: string, firstRelease: Date, seasonsNumber: number, description: string, review: string, picture: string, comments: Array<Comment>) {
      this._name = name;
      this._firstRelease = firstRelease;
      this._seasonsNumber = seasonsNumber;
      this._description = description;
      this._review = review;
      this._picture = picture;
      this._comments = comments;
  
      this._id = Serie.nbId;
      Serie.nbId++;

    }

    /**
     * Getter comments
     * @return {Array<Comment>}
     */
	public get comments(): Array<Comment> {
		return this._comments;
	}

    /**
     * Setter comments
     * @param {Array<Comment>} value
     */
	public set comments(value: Array<Comment>) {
		this._comments = value;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter seasonsNumber
     * @return {number}
     */
	public get seasonsNumber(): number {
		return this._seasonsNumber;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter review
     * @return {string}
     */
	public get review(): string {
		return this._review;
	}

    /**
     * Getter picture
     * @return {string}
     */
	public get picture(): string {
		return this._picture;
	}


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter firstRelease
     * @return {Date}
     */
	public get firstRelease(): Date {
		return this._firstRelease;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter seasonsNumber
     * @param {string} value
     */
	public set seasonsNumber(value: number) {
		this._seasonsNumber = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter review
     * @param {string} value
     */
	public set review(value: string) {
		this._review = value;
	}

    /**
     * Setter picture
     * @param {string} value
     */
	public set picture(value: string) {
		this._picture = value;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter firstRelease
     * @param {Date} value
     */
	public set firstRelease(value: Date) {
		this._firstRelease = value;
    }

}
