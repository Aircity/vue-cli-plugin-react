const {
    execSync
} = require('child_process')

function GetJson(func) {
    try {
        return eval(func);
    } catch (e) {
        return {};
    }
}

function MergePresets(babelConfigRaw = {}, preset = '') {
    const babelConfig = GetJson(babelConfigRaw);
    if (babelConfig.presets) {
        if (!babelConfig.presets.includes(preset)) {
            babelConfig.presets.push(preset);
        }
    } else {
        babelConfig.presets = [preset];
    }
    return `module.exports = ${JSON.stringify(babelConfig)}`;
}

const versionCache = {}

function GetVersion(pkg) {
    if (versionCache[pkg]) {
        return versionCache[pkg]
    }
    const version = execSync(`npm view ${pkg} version`)
        .toString()
        .trim()
    versionCache[pkg] = version
    return `^${version}`
}

module.exports = {
    MergePresets,
    GetJson,
    GetVersion
};