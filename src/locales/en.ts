import { scanFiles } from '@/utils/utils';

export default scanFiles(require.context('./en/', true, /\.ts$/));
