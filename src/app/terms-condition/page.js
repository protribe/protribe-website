import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Terms and Conditions</CardTitle>
          <p className="text-center text-muted-foreground">Effective Date: February 2025</p>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p className="lead mb-[30px]">
            Welcome to ProTribe ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use
            of our website, services, and community platform (collectively, the "Site"), designed as a career
            accelerator for ambitious women professionals. By accessing or using the Site, you agree to comply with and
            be bound by these Terms. If you do not agree to these Terms, please do not use the Site.
          </p>

          <Separator />

          <section className="space-y-8 mt-[30px]">
            <div>
              <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
              <p className="mt-2">
                By accessing or using our Site, you confirm that you have read, understood, and agree to be bound by
                these Terms and our Privacy Policy.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">2. Eligibility</h2>
              <p className="mt-2">
                Our services are intended for individuals aged 18 and older. By using this Site, you represent and
                warrant that you are at least 18 years of age.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">3. User Accounts</h2>
              <p className="mt-2">To access certain features, you may need to create an account. You agree to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Provide accurate, current, and complete information.</li>
                <li>Maintain the confidentiality of your account credentials.</li>
                <li>Notify us immediately of any unauthorized use of your account.</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">4. Community Guidelines</h2>
              <p className="mt-2">
                Our platform thrives on respect, professionalism, and support. By participating in our community, you
                agree to:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Engage constructively and respectfully.</li>
                <li>Avoid discriminatory, offensive, or inappropriate behavior.</li>
                <li>Not share content that violates any laws or third-party rights.</li>
              </ul>
              <p className="mt-2">
                We reserve the right to suspend or terminate accounts that violate these guidelines.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">5. Intellectual Property</h2>
              <p className="mt-2">
                All content on the Site, including text, graphics, logos, and software, is our property or licensed to
                us and protected by intellectual property laws. You may not reproduce, distribute, or create derivative
                works without our prior written consent.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">6. User-Generated Content</h2>
              <p className="mt-2">
                By posting or submitting content on the Site, you grant us a non-exclusive, worldwide, royalty-free
                license to use, display, and distribute such content in connection with our services. You are
                responsible for ensuring your content does not infringe on any third-party rights.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">7. Payments and Subscriptions</h2>
              <p className="mt-2">
                If you purchase any services, you agree to pay the applicable fees and taxes. All payments are
                non-refundable unless stated otherwise. We reserve the right to modify pricing at any time.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">8. Limitation of Liability</h2>
              <p className="mt-2">
                We provide our services "as is" without warranties of any kind, either express or implied. We are not
                liable for any indirect, incidental, or consequential damages arising from your use of the Site.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">9. Indemnification</h2>
              <p className="mt-2">
                You agree to indemnify, defend, and hold harmless ProTribe, its affiliates, and its officers from any
                claims, liabilities, damages, or expenses arising from your use of the Site or violation of these Terms.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">10. Termination</h2>
              <p className="mt-2">
                We reserve the right to suspend or terminate your access to the Site at our discretion, without notice,
                for conduct that violates these Terms or is harmful to other users or us.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">11. Changes to Terms</h2>
              <p className="mt-2">
                We may update these Terms from time to time. Any changes will be posted on this page with an updated
                effective date. Your continued use of the Site after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">12. Governing Law</h2>
              <p className="mt-2">
                These Terms are governed by the laws of Bangalore, India, without regard to its conflict of law
                principles.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold">13. Contact Us</h2>
              <p className="mt-2">
                If you have any questions about these Terms, please contact us at{" "}
                <a href="tel:+919731627601">+91 9731627601</a>
              </p>
            </div>
          </section>

          <Separator className="mt-[30px]" />

          <p className="mt-8 text-center">
            By using our Site, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}