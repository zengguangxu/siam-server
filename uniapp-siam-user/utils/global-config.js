export default class GlabalConfig {
    // static baseUrl = 'https://api.test.siamit.cn/siam-server';
	// #ifdef APP-PLUS||H5
	static baseUrl = 'siam-server';
	// #endif
	// #ifdef MP-WEIXIN||MP-ALIPAY
	static baseUrl = 'http://47.100.177.145:9200/siam-server';
	// #endif
    
    // static baseUrl = 'http://localhost:9020';
    static ossUrl = 'https://siam-hangzhou.oss-cn-hangzhou.aliyuncs.com/';
}
