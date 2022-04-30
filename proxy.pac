function FindProxyForURL(url, host)
{
	PROXY = "SOCKS 127.0.0.1:2333"
	if (shExpMatch(host, "*.163.com") || shExpMatch(host, "*.biligame.com") ||
	    shExpMatch(host, "*.bilibiligame.net") || shExpMatch(host, "*.bilibili.com")) {
		return PROXY;
	}

	return "DIRECT";
}
