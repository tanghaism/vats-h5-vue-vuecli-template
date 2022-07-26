import { scanFiles } from '@/utils/utils';

export default scanFiles(require.context('./zh/', true, /\.ts$/));
