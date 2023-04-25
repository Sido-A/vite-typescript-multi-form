interface AddOns {
  type: string;
  title: string;
  sub: string;
  price: number;
}

const Addons: React.FC<{ account: any; setAccount: any }> = ({
  account,
  setAccount,
}) => {
  const addOns: AddOns[] = [
    {
      type: "online_service",
      title: "Online Service",
      sub: "Access to multiplayer games",
      price: 1,
    },
    {
      type: "larger_storage",
      title: "Larger Storage",
      sub: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      type: "customisable_profile",
      title: "Customisable Profile",
      sub: "Custom theme on your profile",
      price: 2,
    },
  ];

  const handleAddOns = (
    e: React.ChangeEvent<HTMLInputElement>,
    addon_type: string,
    addon_title: string,
    addon_price: number
  ) => {
    const current_addOns = account.add_ons;
    current_addOns.map((a: any) =>
      a.type === addon_type ? (a.isChecked = !a.isChecked) : false
    );
    const types = new Set(current_addOns.map((addon: any) => addon.type));
    const new_addOn = [
      {
        type: addon_type,
        title: addon_title,
        price: addon_price,
        isChecked: e.target.checked,
      },
    ];
    setAccount({
      ...account,
      add_ons: [
        ...current_addOns,
        ...new_addOn.filter((a: any) => !types.has(a.type)),
      ],
    });
  };

  return (
    <div className="flex flex-1 flex-col">
      {addOns.map(({ type, title, sub, price }) => (
        <label
          htmlFor={`online-service-${type}`}
          className="add-ons flex justify-between items-center border border-purple-800 rounded-lg  text-sm px-6 py-4 mb-5"
          key={title}
        >
          <div className="flex items-center">
            <input
              className="form-checkbox bg-blue-900 text-blue-900 h-5 w-5 mr-5"
              type="checkbox"
              name={`online-service-${type}`}
              id={`online-service-${type}`}
              onChange={(e) => handleAddOns(e, type, title, price)}
              checked={
                account.add_ons.find(
                  (addon: any) =>
                    addon["type"] === type && addon["isChecked"] === true
                )
                  ? true
                  : false
              }
            />

            <div className="flex-1">
              <p className="text-blue-900 font-bold">{title}</p>
              <p className="text-gray-500">{sub}</p>
            </div>
          </div>
          <p className="text-purple-800 text-sm">$+{price}/mo</p>
        </label>
      ))}
    </div>
  );
};

export default Addons;
