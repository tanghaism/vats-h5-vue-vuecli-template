import { scanFiles } from '@/utils/utils';

export default scanFiles(require.context('./ja/', true, /\.ts$/));
