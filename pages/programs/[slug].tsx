import BreadCrumbs from "../../components/Breadcrumbs";
import Image from "next/image"

export default function ProgramSlug() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="relative w-full h-56 lg:h-full lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <Image
            fill
            className="object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            alt=""
            quality={60}
          />
        </div>
      </div>
      <div className="relative px-6 pt-12 pb-16 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <BreadCrumbs />
          <h3 className="mt-2 type-headline-large">
            Program Headling Goes Here
          </h3>
          <p className="mt-4 type-title-small">
            A strong community starts with believing in the power of community
            and the potential of each individual to make a positive
            difference. It starts with the belief that we can all work
            together to create a better future.
          </p>
          <div className="mt-5 space-y-4 prose prose-yellow">
            <p>
              Sollicitudin tristique eros erat odio sed vitae, consequat
              turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros
              eu viverra donec ut volutpat donec laoreet quam urna.
            </p>
            <p>
              Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique
              sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et
              et et sit. Faucibus sed non gravida lectus dignissim imperdiet
              a.
            </p>
            <p>
              Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem
              arcu, metus, egestas netus cursus. In.
            </p>
            <ul role="list">
              <li>Quis elit egestas venenatis mattis dignissim.</li>
              <li>
                Cras cras lobortis vitae vivamus ultricies facilisis tempus.
              </li>
              <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
            </ul>
            <p>
              Rhoncus nisl, libero egestas diam fermentum dui. At quis
              tincidunt vel ultricies. Vulputate aliquet velit faucibus
              semper. Pellentesque in venenatis vestibulum consectetur nibh
              id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim
              fermentum lacus in. Viverra.
            </p>
            <h3>How we’re different</h3>
            <p>
              Tincidunt integer commodo, cursus etiam aliquam neque, et.
              Consectetur pretium in volutpat, diam. Montes, magna cursus
              nulla feugiat dignissim id lobortis amet. Laoreet sem est
              phasellus eu proin massa, lectus. Diam rutrum posuere donec
              ultricies non morbi. Mi a platea auctor mi.
            </p>
            <p>
              Mauris ullamcorper imperdiet nec egestas mi quis quam ante
              vulputate. Vel faucibus adipiscing lacus, eget. Nunc fermentum
              id tellus donec. Ut metus odio sit sit varius non nunc orci. Eu,
              mi neque, ornare suspendisse amet, nibh. Facilisi volutpat
              lectus id sapien dis mauris rhoncus. Est rhoncus, interdum
              imperdiet ac eros, diam mauris, tortor. Risus id sit molestie
              magna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
