async function deletePosts() {
    // First click

document.querySelector('.xqcrz7y.x78zum5.x1qx5ct2.x1y1aw1k.x1sxyh0.xwib8y2.xurb0ha.xw4jnvo>div>.x1i10hfl.x1qjc9v5.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x9f619.x1ypdohk.xdl72j9.x2lah0s.xe8uvvx.x2lwn1j.xeuugli.x16tdsg8.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1o1ewxj.x3x9cwd.x1e5q0jg.x13rtm0m.x1q0g3np.x87ps6o.x1lku1pv.x1a2a7pz.xjyslct.xjbqb8w.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x972fbf.xcfux6l.x1qhh985.xm0m39n.x3nfvp2.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x3ajldb.x194ut8o.x1vzenxt.xd7ygy7.xt298gk.x1xhcax0.x1s928wv.x10pfhc2.x1j6awrg.x1v53gu8.x1tfg27r.xitxdhh')?.click();



    // Await for 2 seconds
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Second click
    document.querySelector('.x6s0dn4.xoi2r2e.x78zum5.xl56j7k.xq8finb.xcrj56b.x1ua1ozc:has(path[d="M6.5 2.75A2.25 2.25 0 0 1 8.75.5h2.5a2.25 2.25 0 0 1 2.25 2.25v.75h4.75a.75.75 0 0 1 0 1.5H17.2l-.634 9.197c-.073 1.06-.133 1.928-.271 2.613-.144.716-.392 1.331-.91 1.816-.52.484-1.151.689-1.876.784-.691.09-1.562.09-2.625.09H9.116c-1.063 0-1.933 0-2.625-.09-.725-.095-1.356-.3-1.875-.784-.52-.485-.767-1.1-.911-1.817-.138-.684-.198-1.552-.27-2.612L2.8 5H1.75a.75.75 0 0 1 0-1.5H6.5v-.75zM8 3.5h4v-.75a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v.75z"])')?.click();
    await new Promise(resolve => setTimeout(resolve, 1000));
document.querySelector('.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.x17ot9bj.xl9nvqe:has([aria-label="Delete"])>div[aria-label="Delete"]')?.click();
}
setInterval(deletePosts, 10000);
