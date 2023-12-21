import { Herr_Von_Muellerhoff } from "next/font/google";
import Image from "next/image";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div>
      <br></br>
      <a href="/api/auth/login">Login</a>

      <br></br>
      <h2>
        🌟 Maximize Your Land Investments with Land Mailer IO - Your Ultimate
        Mailing CRM!
      </h2>
      <br></br>
      <h3>Welcome to the game-changer in land investment management!</h3>
      <br></br>
      <p>
        Land Mailer IO is not just a CRM; it&apos;s your key to unlocking
        unparalleled efficiency, targeted outreach, and skyrocketing success in
        the land investment arena.
      </p>
      <br></br>
      <h3> ✨ Why Choose Land Mailer IO?</h3>
      <br></br>
      <p>
        🚀 Streamlined Workflow: Say goodbye to the hassle of manual tasks. Land
        Mailer IO automates your land investment processes, freeing up your time
        to focus on what truly matters – expanding your land portfolio.
      </p>
      <br></br>
      <p>
        📈 Efficiency Redefined: Experience a surge in productivity as Land
        Mailer IO optimizes your workflow. Manage contacts effortlessly, track
        leads seamlessly, and keep a pulse on your entire operation with our
        intuitive interface.
      </p>
      <br></br>
      <p>
        {" "}
        🎯 Precision Targeting: Tired of generic outreach? Our CRM empowers you
        to tailor your mail campaigns with precision. Identify high-potential
        opportunities using advanced analytics and watch your conversions soar.
      </p>
      <br></br>
      <p>
        📧 Personalized Mail Campaigns: Craft compelling, personalized messages
        effortlessly. Design eye-catching mail campaigns that stand out in the
        crowded market, building trust and credibility with your audience.
      </p>
      <br></br>
      <p>
        🔒 Data Security and Compliance: Your data is your asset. Rest easy
        knowing Land Mailer IO prioritizes security with state-of-the-art
        encryption, keeping you compliant with industry regulations.
      </p>
      <br></br>
      <p>
        🌐 Anywhere, Anytime Access: Work on your terms with cloud-based access.
        Manage your land investments from anywhere with an internet connection –
        whether you&apos;re in the office, on the field, or working remotely.
      </p>
      <br></br>
      <p>
        📊 Real-Time Analytics: Make informed decisions with real-time
        analytics. Track campaign performance, analyze engagement metrics, and
        stay ahead of the competition with Land Mailer IO.
      </p>
      <br></br>
      <p>
        🎁 Exclusive Offer: Start Your Free Trial Today! Ready to transform your
        land investment game? Claim your free trial of Land Mailer IO now! Visit
        [Land Mailer IO Website] and experience firsthand how Land Mailer IO can
        revolutionize your approach to land investment.
      </p>
      <br></br>
      <p>🚀 Don&apos;t Miss Out – Your Success Awaits!</p>
      <br></br>
      <p>
        Take the first step toward unparalleled success in land investment.
        Embrace efficiency, maximize returns, and conquer the market with Land
        Mailer IO.
      </p>
    </div>
  );
}
