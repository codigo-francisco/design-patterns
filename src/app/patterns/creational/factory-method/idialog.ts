export interface IDialog {
    render(message: string): void;
    onClick(data: any): void;
}