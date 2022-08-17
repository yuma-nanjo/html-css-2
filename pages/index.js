import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  function navFunc() {
    document.querySelector("html").classList.toggle("open");
  }

  return (
    <>
      <header className="header">
        <div className="site">
          <img src="/yamacafe-w.svg" alt="YAMACAFE ヤマカフェ" />
        </div>

        <nav className="nav">
          <ul>
            <li>
              <Link href="/">
                <a>ホーム</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>こだわりメニュー</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>お知らせ</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>営業時間</a>
              </Link>
            </li>
          </ul>
        </nav>

        <button type="button" className="nav-button" onClick={navFunc}>
          <span className="sr-only">MENU</span>
        </button>
      </header>
      <div className="hero">
        <h1>
          <img src="/catch.svg" alt="Take A Break"></img>
        </h1>
      </div>

      <article className="menu container">
        <div className="menu-inner">
          <div className="menu-title">
            <h2>Food & Drink</h2>
            <p>こだわり素材のメニューをご紹介します</p>
          </div>

          <section className="item cafe">
            <div className="text">
              <h3>定番カフェ</h3>
              <p>
                定番だからこそ、豆や茶葉、ミルク、キャラメルなどの素材にこだわった一杯を提供しています。
              </p>
            </div>
            <div className="photo">
              <figure className="fig1">
                <img src="/beans.jpg" alt="豆" />
              </figure>
              <figure className="fig2">
                <img src="/espresso.jpg" alt="エスプレッソ" />
              </figure>
            </div>
          </section>

          <section className="item plate">
            <div className="text">
              <h3>季節のスペシャルプレート</h3>
              <p>
                季節のフルーツを組み合わせたスペシャルプレートはカフェ専属シェフのおすすめメニューです。
              </p>
            </div>
            <div className="photo">
              <figure className="fig1">
                <img src="/plate.jpg" alt="プレート" />
              </figure>
            </div>
          </section>

          <section className="item sweet">
            <div className="text">
              <h3>お持ち帰りスイーツ</h3>
              <p>
                自宅でのんびりしながら楽しめるスイーツたちです。ケーキ、クリームサンド、クッキーなどをご用意しています。
              </p>
            </div>
            <div className="photo">
              <figure className="fig1">
                <img src="/cake.jpg" alt="ケーキ" />
              </figure>
              <figure className="fig2">
                <img src="/sandwich.jpg" alt="サンド" />
              </figure>
            </div>
          </section>
        </div>
      </article>

      <aside className="news container">
        <h2>Whats New</h2>
        <p>カフェからのお知らせ&新着情報です</p>

        <dl>
          <dt>2020年2月1日</dt>
          <dd>お持ち帰りスイーツにバレンタインパックが仲間入りしました。</dd>

          <dt>2020年1月1日</dt>
          <dd>
            恒例の「旧正月ご来光カフェ」を1月25日午前6時より前岳山頂で開催します。
          </dd>

          <dt>2019年12月26日</dt>
          <dd>
            年末の営業は30日の午後8時まで、年始の営業は3日の午前11時からとさせていただきます。4日からは通常営業の予定です。
          </dd>

          <dt>2019年12月20日</dt>
          <dd>クリスマスプレートのご予約は23日までとなっております。</dd>
        </dl>

        <Link href="/">
          <a className="more">お知らせ一覧</a>
        </Link>
      </aside>

      <aside className="hours container">
        <h2>HOURS</h2>
        <p>営業時間</p>

        <dl>
          <dt>月〜金</dt>
          <dd>7:00 am - 9:00 pm</dd>

          <dt>土〜日</dt>
          <dd>9:00 am - 8:00 pm</dd>
        </dl>
      </aside>

      <aside className="info container">
        <div className="text">
          <h2>
            <img src="/yamacafe.svg" alt="YAMACAFE" />
          </h2>
          <p>ヤマカフェ</p>

          <p className="address">
            〒 901-3125
            <br />
            沖縄県島尻郡久米島町字鳥鳥グスク
            <br />
            0997-1234-5678
          </p>

          <ul className="sns">
            <li>
              <Link href="/">
                <a>
                  <img src="/logo-twitter.svg" alt="Twitter" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img src="/logo-facebook.svg" alt="Facebook" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img src="/logo-instagram.svg" alt="Instagram" />
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14107.795678797595!2d128.21823999017107!3d27.8728394235774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e24f342af39daf%3A0xc88a39cf650d74fe!2z56Gr6buE6bOl5bO2!5e0!3m2!1sja!2sjp!4v1660777127455!5m2!1sja!2sjp"></iframe>
        </div> */}
      </aside>

      <footer className="footer">COPYRIGHT © YAMACAFE</footer>
    </>
  );
}
