import { CleanWebpackPlugin } from "clean-webpack-plugin";
export const entry: string;
export namespace output {
    const path: string;
    const filename: string;
    const library: string;
    const libraryTarget: string;
    const globalObject: string;
}
export const plugins: CleanWebpackPlugin[];
export namespace resolve {
    const extensions: string[];
}
export namespace module {
    const rules: {
        test: RegExp;
        use: string;
        exclude: RegExp;
    }[];
}
