import { useState } from "react";

const initial = {
  name: "",
  email: "",
  countryCode: "+91",
  phone: "",
  message: "",
  botcheck: "",
};

function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d7559736-92a8-47b2-905f-3e8636130c0a",
          name: form.name,
          email: form.email,
          country_code: form.countryCode,
          phone: form.phone,
          message: form.message,
          botcheck: form.botcheck || "",
          from_name: "AstraCognix Website",
          subject: "New Get in Touch message",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setForm(initial);
      } else {
        console.error(result);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Get in Touch</p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Let’s talk about your project</h2>
          <p className="mt-3 text-slate-600">
            Tell us about your goals. We’ll craft a tailored approach with the right mix of discovery, design, and
            engineering.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p>📍 Bhubaneswar, Odisha 752054</p>
            <p>📞 +91-62028-08498</p>
            <p>✉️ astracognixsolutions@gmail.com</p>
            <iframe
              title="Map"
              className="mt-4 w-full rounded-2xl border border-slate-200"
              height="200"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.7540584989576!2d77.0669!3d28.5448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d68226e9b5%3A0x27426e92748ad6b6!2sGurugram%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000"
              allowFullScreen
            />
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-card">
          {/* Web3Forms honeypot field for basic spam protection */}
          <label className="sr-only" htmlFor="botcheck-contact">
            Bot check
          </label>
          <input
            type="checkbox"
            id="botcheck-contact"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            onChange={() => {}}
          />
          <div className="grid gap-4 md:grid-cols-2">
            <label htmlFor="contact-name" className="text-sm font-semibold text-slate-700">
              Name
              <input
                required
                id="contact-name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
            <label htmlFor="contact-email" className="text-sm font-semibold text-slate-700">
              Email
              <input
                required
                type="email"
                id="contact-email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
            <label htmlFor="contact-country-code" className="text-sm font-semibold text-slate-700">
              Country Code
              <select
                id="contact-country-code"
                name="countryCode"
                autoComplete="tel-country-code"
                value={form.countryCode}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
              >
                <option value="+1">+1 (USA/Canada)</option>
                <option value="+7">+7 (Russia/Kazakhstan)</option>
                <option value="+20">+20 (Egypt)</option>
                <option value="+27">+27 (South Africa)</option>
                <option value="+30">+30 (Greece)</option>
                <option value="+31">+31 (Netherlands)</option>
                <option value="+32">+32 (Belgium)</option>
                <option value="+33">+33 (France)</option>
                <option value="+34">+34 (Spain)</option>
                <option value="+36">+36 (Hungary)</option>
                <option value="+39">+39 (Italy)</option>
                <option value="+40">+40 (Romania)</option>
                <option value="+41">+41 (Switzerland)</option>
                <option value="+43">+43 (Austria)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+45">+45 (Denmark)</option>
                <option value="+46">+46 (Sweden)</option>
                <option value="+47">+47 (Norway)</option>
                <option value="+48">+48 (Poland)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+51">+51 (Peru)</option>
                <option value="+52">+52 (Mexico)</option>
                <option value="+53">+53 (Cuba)</option>
                <option value="+54">+54 (Argentina)</option>
                <option value="+55">+55 (Brazil)</option>
                <option value="+56">+56 (Chile)</option>
                <option value="+57">+57 (Colombia)</option>
                <option value="+58">+58 (Venezuela)</option>
                <option value="+60">+60 (Malaysia)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+62">+62 (Indonesia)</option>
                <option value="+63">+63 (Philippines)</option>
                <option value="+64">+64 (New Zealand)</option>
                <option value="+65">+65 (Singapore)</option>
                <option value="+66">+66 (Thailand)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+82">+82 (South Korea)</option>
                <option value="+84">+84 (Vietnam)</option>
                <option value="+86">+86 (China)</option>
                <option value="+90">+90 (Turkey)</option>
                <option value="+91">+91 (India)</option>
                <option value="+92">+92 (Pakistan)</option>
                <option value="+93">+93 (Afghanistan)</option>
                <option value="+94">+94 (Sri Lanka)</option>
                <option value="+95">+95 (Myanmar)</option>
                <option value="+98">+98 (Iran)</option>
                <option value="+212">+212 (Morocco)</option>
                <option value="+213">+213 (Algeria)</option>
                <option value="+216">+216 (Tunisia)</option>
                <option value="+218">+218 (Libya)</option>
                <option value="+220">+220 (Gambia)</option>
                <option value="+221">+221 (Senegal)</option>
                <option value="+222">+222 (Mauritania)</option>
                <option value="+223">+223 (Mali)</option>
                <option value="+224">+224 (Guinea)</option>
                <option value="+225">+225 (Ivory Coast)</option>
                <option value="+226">+226 (Burkina Faso)</option>
                <option value="+227">+227 (Niger)</option>
                <option value="+228">+228 (Togo)</option>
                <option value="+229">+229 (Benin)</option>
                <option value="+230">+230 (Mauritius)</option>
                <option value="+231">+231 (Liberia)</option>
                <option value="+232">+232 (Sierra Leone)</option>
                <option value="+233">+233 (Ghana)</option>
                <option value="+234">+234 (Nigeria)</option>
                <option value="+235">+235 (Chad)</option>
                <option value="+236">+236 (Central African Republic)</option>
                <option value="+237">+237 (Cameroon)</option>
                <option value="+238">+238 (Cape Verde)</option>
                <option value="+239">+239 (São Tomé and Príncipe)</option>
                <option value="+240">+240 (Equatorial Guinea)</option>
                <option value="+241">+241 (Gabon)</option>
                <option value="+242">+242 (Republic of the Congo)</option>
                <option value="+243">+243 (Democratic Republic of the Congo)</option>
                <option value="+244">+244 (Angola)</option>
                <option value="+245">+245 (Guinea-Bissau)</option>
                <option value="+246">+246 (British Indian Ocean Territory)</option>
                <option value="+247">+247 (Ascension Island)</option>
                <option value="+248">+248 (Seychelles)</option>
                <option value="+249">+249 (Sudan)</option>
                <option value="+250">+250 (Rwanda)</option>
                <option value="+251">+251 (Ethiopia)</option>
                <option value="+252">+252 (Somalia)</option>
                <option value="+253">+253 (Djibouti)</option>
                <option value="+254">+254 (Kenya)</option>
                <option value="+255">+255 (Tanzania)</option>
                <option value="+256">+256 (Uganda)</option>
                <option value="+257">+257 (Burundi)</option>
                <option value="+258">+258 (Mozambique)</option>
                <option value="+260">+260 (Zambia)</option>
                <option value="+261">+261 (Madagascar)</option>
                <option value="+262">+262 (Réunion/Mayotte)</option>
                <option value="+263">+263 (Zimbabwe)</option>
                <option value="+264">+264 (Namibia)</option>
                <option value="+265">+265 (Malawi)</option>
                <option value="+266">+266 (Lesotho)</option>
                <option value="+267">+267 (Botswana)</option>
                <option value="+268">+268 (Eswatini)</option>
                <option value="+269">+269 (Comoros)</option>
                <option value="+290">+290 (Saint Helena)</option>
                <option value="+291">+291 (Eritrea)</option>
                <option value="+297">+297 (Aruba)</option>
                <option value="+298">+298 (Faroe Islands)</option>
                <option value="+299">+299 (Greenland)</option>
                <option value="+350">+350 (Gibraltar)</option>
                <option value="+351">+351 (Portugal)</option>
                <option value="+352">+352 (Luxembourg)</option>
                <option value="+353">+353 (Ireland)</option>
                <option value="+354">+354 (Iceland)</option>
                <option value="+355">+355 (Albania)</option>
                <option value="+356">+356 (Malta)</option>
                <option value="+357">+357 (Cyprus)</option>
                <option value="+358">+358 (Finland)</option>
                <option value="+359">+359 (Bulgaria)</option>
                <option value="+370">+370 (Lithuania)</option>
                <option value="+371">+371 (Latvia)</option>
                <option value="+372">+372 (Estonia)</option>
                <option value="+373">+373 (Moldova)</option>
                <option value="+374">+374 (Armenia)</option>
                <option value="+375">+375 (Belarus)</option>
                <option value="+376">+376 (Andorra)</option>
                <option value="+377">+377 (Monaco)</option>
                <option value="+378">+378 (San Marino)</option>
                <option value="+379">+379 (Vatican City)</option>
                <option value="+380">+380 (Ukraine)</option>
                <option value="+381">+381 (Serbia)</option>
                <option value="+382">+382 (Montenegro)</option>
                <option value="+383">+383 (Kosovo)</option>
                <option value="+385">+385 (Croatia)</option>
                <option value="+386">+386 (Slovenia)</option>
                <option value="+387">+387 (Bosnia and Herzegovina)</option>
                <option value="+389">+389 (North Macedonia)</option>
                <option value="+420">+420 (Czech Republic)</option>
                <option value="+421">+421 (Slovakia)</option>
                <option value="+423">+423 (Liechtenstein)</option>
                <option value="+500">+500 (Falkland Islands)</option>
                <option value="+501">+501 (Belize)</option>
                <option value="+502">+502 (Guatemala)</option>
                <option value="+503">+503 (El Salvador)</option>
                <option value="+504">+504 (Honduras)</option>
                <option value="+505">+505 (Nicaragua)</option>
                <option value="+506">+506 (Costa Rica)</option>
                <option value="+507">+507 (Panama)</option>
                <option value="+508">+508 (Saint Pierre and Miquelon)</option>
                <option value="+509">+509 (Haiti)</option>
                <option value="+590">+590 (Guadeloupe/Martinique)</option>
                <option value="+591">+591 (Bolivia)</option>
                <option value="+592">+592 (Guyana)</option>
                <option value="+593">+593 (Ecuador)</option>
                <option value="+594">+594 (French Guiana)</option>
                <option value="+595">+595 (Paraguay)</option>
                <option value="+596">+596 (Martinique)</option>
                <option value="+597">+597 (Suriname)</option>
                <option value="+598">+598 (Uruguay)</option>
                <option value="+599">+599 (Curaçao/Bonaire)</option>
                <option value="+670">+670 (East Timor)</option>
                <option value="+672">+672 (Norfolk Island)</option>
                <option value="+673">+673 (Brunei)</option>
                <option value="+674">+674 (Nauru)</option>
                <option value="+675">+675 (Papua New Guinea)</option>
                <option value="+676">+676 (Tonga)</option>
                <option value="+677">+677 (Solomon Islands)</option>
                <option value="+678">+678 (Vanuatu)</option>
                <option value="+679">+679 (Fiji)</option>
                <option value="+680">+680 (Palau)</option>
                <option value="+681">+681 (Wallis and Futuna)</option>
                <option value="+682">+682 (Cook Islands)</option>
                <option value="+683">+683 (Niue)</option>
                <option value="+684">+684 (American Samoa)</option>
                <option value="+685">+685 (Samoa)</option>
                <option value="+686">+686 (Kiribati)</option>
                <option value="+687">+687 (New Caledonia)</option>
                <option value="+688">+688 (Tuvalu)</option>
                <option value="+689">+689 (French Polynesia)</option>
                <option value="+690">+690 (Tokelau)</option>
                <option value="+691">+691 (Federated States of Micronesia)</option>
                <option value="+692">+692 (Marshall Islands)</option>
                <option value="+850">+850 (North Korea)</option>
                <option value="+852">+852 (Hong Kong)</option>
                <option value="+853">+853 (Macau)</option>
                <option value="+855">+855 (Cambodia)</option>
                <option value="+856">+856 (Laos)</option>
                <option value="+880">+880 (Bangladesh)</option>
                <option value="+886">+886 (Taiwan)</option>
                <option value="+960">+960 (Maldives)</option>
                <option value="+961">+961 (Lebanon)</option>
                <option value="+962">+962 (Jordan)</option>
                <option value="+963">+963 (Syria)</option>
                <option value="+964">+964 (Iraq)</option>
                <option value="+965">+965 (Kuwait)</option>
                <option value="+966">+966 (Saudi Arabia)</option>
                <option value="+967">+967 (Yemen)</option>
                <option value="+968">+968 (Oman)</option>
                <option value="+970">+970 (Palestine)</option>
                <option value="+971">+971 (UAE)</option>
                <option value="+972">+972 (Israel)</option>
                <option value="+973">+973 (Bahrain)</option>
                <option value="+974">+974 (Qatar)</option>
                <option value="+975">+975 (Bhutan)</option>
                <option value="+976">+976 (Mongolia)</option>
                <option value="+977">+977 (Nepal)</option>
                <option value="+992">+992 (Tajikistan)</option>
                <option value="+993">+993 (Turkmenistan)</option>
                <option value="+994">+994 (Azerbaijan)</option>
                <option value="+995">+995 (Georgia)</option>
                <option value="+996">+996 (Kyrgyzstan)</option>
                <option value="+998">+998 (Uzbekistan)</option>
              </select>
            </label>
            <label htmlFor="contact-phone" className="text-sm font-semibold text-slate-700">
              Phone Number
              <input
                required
                type="tel"
                id="contact-phone"
                name="phone"
                autoComplete="tel"
                value={form.phone}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
          </div>
          <label htmlFor="contact-message" className="mt-4 block text-sm font-semibold text-slate-700">
            Message
            <textarea
              required
              id="contact-message"
              name="message"
              autoComplete="off"
              value={form.message}
              onChange={onChange}
              rows={4}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </label>
          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-4 w-full rounded-full bg-primary px-4 py-3 text-white font-semibold shadow-md hover:bg-primary/90 disabled:opacity-60"
          >
            {status === "loading" ? "Submitting..." : "Submit"}
          </button>
          {status === "success" && <p className="mt-3 text-sm text-green-600">We received your inquiry!</p>}
          {status === "error" && <p className="mt-3 text-sm text-red-600">Something went wrong. Please retry.</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;

