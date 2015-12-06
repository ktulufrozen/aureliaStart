declare module 'jsurl' {
    interface JsUrl {
        stringify(input: Object): string;
        parse(input: string): Object;
    }

    var jsurl: JsUrl;
    export = jsurl;
}