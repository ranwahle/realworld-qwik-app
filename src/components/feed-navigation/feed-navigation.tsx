import { component$, QRL, useStore } from "@builder.io/qwik";
import { NavItem } from "./nav-item";
import "./feed-navigation.css";
interface ComponentState {
  activeTab: NavItem | undefined;
}

export const changeNavigation = (
  state: ComponentState,
  nav: NavItem,
  callback: (tab: NavItem) => void
) => {
  state.activeTab = nav;
  callback(nav);
};
export const FeedNavigation = component$(
  (props: { tabs: NavItem[];  navigationChange$: QRL<(tab) => void>, 
    activeTab?: NavItem }) => {
    const state: ComponentState = useStore({
      activeTab: props.activeTab || props.tabs[0],
    });

    console.log('active tab', state.activeTab)
    return (
      <ul class="nav-list">
        {props.tabs.map((tab) => (
          <li class={tab.label !== state.activeTab?.label ? "nav-item" : "nav-item active"}>
            <a
              onClick$={() =>
                changeNavigation(state, tab, props.navigationChange$)
              }
            >
              {" "}
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }
);
