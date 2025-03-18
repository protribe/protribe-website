import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
          <p className="text-center text-muted-foreground">Effective Date: February 2025</p>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p className="lead mb-[30px]">
            Welcome to ProTribe ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website and use our services, designed as a career accelerator
            for ambitious women professionals (the "Site"). By accessing or using the Site, you agree to the terms of
            this Privacy Policy. If you do not agree with the practices described in this policy, please do not use the
            Site.
          </p>

        <Separator />

          <section className="space-y-8 mt-[30px]">
            <div>
              <h2 className="text-xl font-semibold">1. Information We Collect</h2>
              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="font-medium">a. Information You Provide to Us:</h3>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Name, email address, contact details, and profile information when you register.</li>
                    <li>Information you submit through forms, surveys, or community interactions.</li>
                    <li>
                      Payment information when you purchase services (processed securely through third-party payment
                      processors).
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium">b. Information We Collect Automatically:</h3>
                  <ul className="list-disc pl-6 mt-2">
                    <li>IP address, browser type, operating system, and device information.</li>
                    <li>Usage data, including pages visited, time spent, and other analytics.</li>
                    <li>Cookies and tracking technologies to enhance user experience (see "Cookies" section below).</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium">c. Information from Third Parties:</h3>
                  <p className="mt-2">
                    If you connect third-party services (e.g., social media accounts), we may receive related
                    information.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 mt-4">
                <li>To provide, maintain, and improve our services.</li>
                <li>To personalize user experience and deliver relevant content.</li>
                <li>To communicate with you regarding updates, promotions, and support.</li>
                <li>To process transactions securely.</li>
                <li>To ensure the safety and security of our platform.</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">3. Sharing of Information</h2>
              <p className="mt-2">We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <span className="font-medium">Service Providers:</span> Third parties who assist us in operating the
                  Site (e.g., hosting, analytics, payment processing).
                </li>
                <li>
                  <span className="font-medium">Legal Requirements:</span> If required by law, to comply with legal
                  obligations or protect our rights.
                </li>
                <li>
                  <span className="font-medium">Community Interactions:</span> Information you post in public areas may
                  be visible to other users.
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">4. Data Security</h2>
              <p className="mt-2">
                We implement security measures to protect your personal information, including encryption, secure
                servers, and regular security reviews. However, no method of transmission over the Internet is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">5. Your Rights and Choices</h2>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <span className="font-medium">Access and Update:</span> You can access and update your personal
                  information through your account settings.
                </li>
                <li>
                  <span className="font-medium">Opt-Out:</span> You can opt out of marketing communications at any time
                  by following the unsubscribe link in our emails.
                </li>
                <li>
                  <span className="font-medium">Delete Account:</span> You may request to delete your account by
                  contacting us at [Insert Contact Information].
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">6. Cookies and Tracking Technologies</h2>
              <p className="mt-2">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Analyze website traffic and usage patterns.</li>
                <li>Personalize content and ads.</li>
                <li>Improve the functionality and performance of our services.</li>
              </ul>
              <p className="mt-2">
                You can control or disable cookies through your browser settings, though this may affect your user
                experience.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">7. Children's Privacy</h2>
              <p className="mt-2">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
                information from children under 18. If we learn we have collected such information, we will delete it
                promptly.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">8. International Data Transfers</h2>
              <p className="mt-2">
                If you are accessing our Site from outside India, your information may be transferred to and
                processed in countries with different data protection laws. By using our Site, you consent to such
                transfers.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">9. Changes to This Privacy Policy</h2>
              <p className="mt-2">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                updated effective date. Your continued use of the Site after changes indicates your acceptance of the
                revised policy.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">10. Contact Us</h2>
              <p className="mt-2">
                If you have any questions about this Privacy Policy, please contact us at:{" "}
                <a href="tel:+919731627601">+91 9731627601</a>
              </p>
            </div>
          </section>

          <Separator className="mt-[30px]"/>

          <p className="mt-8 text-center">
            By using our Site, you acknowledge that you have read, understood, and agree to this Privacy Policy.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

