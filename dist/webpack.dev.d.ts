declare const _exports: {
    entry: string;
    output: {
        path: string;
        filename: string;
        library: string;
        libraryTarget: string;
        globalObject: string;
    };
    plugins: import("clean-webpack-plugin").CleanWebpackPlugin[];
    resolve: {
        extensions: string[];
    };
    module: {
        rules: {
            test: RegExp;
            use: string;
            exclude: RegExp;
        }[];
    };
};
export = _exports;
