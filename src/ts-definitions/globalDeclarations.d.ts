import { compose } from 'redux';

declare global {
    interface Window {
        devToolsExtension?: typeof compose;
    }
}
