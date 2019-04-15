import { dirname, join } from 'path'
import isDev from 'electron-is-dev'
import appRootPath from '@zap/utils/appRootPath'
import lndBinaryName from '@zap/utils/lndBinaryName'

/**
 * Get the OS specific path to the lnd binary.
 * @return {String} Path to the lnd binary.
 */
const lndBinaryPath = () => {
  return isDev
    ? join(dirname(require.resolve('lnd-binary/package.json')), 'vendor', lndBinaryName)
    : join(appRootPath(), 'resources', 'bin', lndBinaryName)
}

export default lndBinaryPath
