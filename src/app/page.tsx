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
      <a href="/api/auth/login">Login</a>
      <h2>
        🌟 Maximize Your Land Investments with Land Mailer IO - Your Ultimate
        Mailing CRM!
      </h2>

      <h3>Welcome to the game-changer in land investment management!</h3>

      <p>
        Land Mailer IO is not just a CRM; it's your key to unlocking
        unparalleled efficiency, targeted outreach, and skyrocketing success in
        the land investment arena.{" "}
      </p>

      <h3> ✨ Why Choose Land Mailer IO?</h3>

      <p>
        🚀 Streamlined Workflow: Say goodbye to the hassle of manual tasks. Land
        Mailer IO automates your land investment processes, freeing up your time
        to focus on what truly matters – expanding your land portfolio.
      </p>

      <p>
        📈 Efficiency Redefined: Experience a surge in productivity as Land
        Mailer IO optimizes your workflow. Manage contacts effortlessly, track
        leads seamlessly, and keep a pulse on your entire operation with our
        intuitive interface.
      </p>

      <p>
        {" "}
        🎯 Precision Targeting: Tired of generic outreach? Our CRM empowers you
        to tailor your mail campaigns with precision. Identify high-potential
        opportunities using advanced analytics and watch your conversions soar.
      </p>

      <p>
        📧 Personalized Mail Campaigns: Craft compelling, personalized messages
        effortlessly. Design eye-catching mail campaigns that stand out in the
        crowded market, building trust and credibility with your audience.
      </p>

      <p>
        🔒 Data Security and Compliance: Your data is your asset. Rest easy
        knowing Land Mailer IO prioritizes security with state-of-the-art
        encryption, keeping you compliant with industry regulations.
      </p>

      <p>
        🌐 Anywhere, Anytime Access: Work on your terms with cloud-based access.
        Manage your land investments from anywhere with an internet connection –
        whether you're in the office, on the field, or working remotely.
      </p>

      <p>
        📊 Real-Time Analytics: Make informed decisions with real-time
        analytics. Track campaign performance, analyze engagement metrics, and
        stay ahead of the competition with Land Mailer IO.
      </p>

      <p>
        🎁 Exclusive Offer: Start Your Free Trial Today! Ready to transform your
        land investment game? Claim your free trial of Land Mailer IO now! Visit
        [Land Mailer IO Website] and experience firsthand how Land Mailer IO can
        revolutionize your approach to land investment.
      </p>

      <p>🚀 Don't Miss Out – Your Success Awaits!</p>

      <p>
        Take the first step toward unparalleled success in land investment.
        Embrace efficiency, maximize returns, and conquer the market with Land
        Mailer IO.
      </p>
    </div>
  );
}
