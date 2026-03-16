import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { width } = Dimensions.get("window");
const Tab = createBottomTabNavigator();

const COLORS = {
  white: "#FFFFFF",
  bg: "#FFFFFF",
  primary: "#4C43F7",
  paleYellow: "#F2F1C8",
  paleYellow2: "#F4F3CB",
  lightGray: "#F7F7F7",
  cardGray: "#F5F5F5",
  text: "#111111",
  subText: "#7D7D7D",
  greenCard: "#BEEBDE",
  greenActive: "#34D8A4",
  border: "#ECECEC",
  black: "#0E0E0E",
  yellow: "#FFD400",
};

const IMAGES = {
  // ===== Bottom Nav =====
  tabHome: require("./Thuchanh/01.png"),
  tabIndex: require("./Thuchanh/03.png"),
  tabProfile: require("./Thuchanh/05.png"),
  tabOrder: require("./Thuchanh/Group33657.png"),

  // ===== Small icons =====
  bellIcon: require("./Thuchanh/Group18103.png"),
  backIcon: require("./Thuchanh/Frame(2).png"),
  deleteIcon: require("./Thuchanh/Frame(3).png"),

  // ===== Category =====
  catPizza: require("./Thuchanh/Group33652.png"),
  catBurger: require("./Thuchanh/Group33654.png"),
  catDrink: require("./Thuchanh/Group33653.png"),
  catRici: require("./Thuchanh/Group33655.png"),

  // ===== Profile Menu =====
  menuHome: require("./Thuchanh/Frame(1).png"),
  menuCard: require("./Thuchanh/Frame(3).png"),
  menuDark: require("./Thuchanh/tdesignmodedark.png"),
  menuTrack: require("./Thuchanh/Frame(4).png"),
  menuSettings: require("./Thuchanh/Frame(5).png"),
  menuHelp: require("./Thuchanh/Frame(6).png"),
  menuArrow: require("./Thuchanh/Frame(2).png"),

  // ===== Content =====
  locationBlock: require("./Thuchanh/Group33656.png"),
  popularItems: require("./Thuchanh/Group33661.png"),
  confirmOrderBtn: require("./Thuchanh/Group33662.png"),
  qtyControl: require("./Thuchanh/Group33665.png"),
  ratingBlock: require("./Thuchanh/Group33666.png"),
  checkoutSummary: require("./Thuchanh/Group33667.png"),
  callSquare: require("./Thuchanh/sql.png"),
  addressCard: require("./Thuchanh/Group33669.png"),
  thumbsRow: require("./Thuchanh/Group33670.png"),
  paymentMethod: require("./Thuchanh/payment.png"),
  avatar: require("./Thuchanh/Group33672.png"),

  // ===== Large =====
  profileTopBg: require("./Thuchanh/Rectangle.png"),
  burgerHero: require("./Thuchanh/Rectangle 35.png"),

  // ===== Extra =====
  price28: require("./Thuchanh/so.png"),
  burgerText: require("./Thuchanh/DesignPrinciples.png"),
  logoutBtn: require("./Thuchanh/Button.png"),
  editIcon: require("./Thuchanh/tableredit.png"),
  darkToggle: require("./Thuchanh/Toggle.png"),
};

// ================== TAB ICON ==================
function TabIcon({ source, label, focused }) {
  return (
    <View style={styles.tabIconWrap}>
      <Image source={source} style={styles.tabIcon} resizeMode="contain" />
      <Text style={[styles.tabLabel, { color: focused ? COLORS.primary : "#111" }]}>
        {label}
      </Text>
    </View>
  );
}

// ================== SEARCH BAR ==================
function SearchBar() {
  return (
    <View style={styles.searchBar}>
      <Text style={styles.searchIcon}>⌕</Text>
      <TextInput
        placeholder="Search your food"
        placeholderTextColor="#D7D3FF"
        style={styles.searchInput}
      />
      <Text style={styles.searchFilter}>⚙</Text>
    </View>
  );
}

// ================== CATEGORY CARD ==================
function CategoryCard({ active, icon, label }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.categoryCard, active && styles.categoryCardActive]}
    >
      <Image source={icon} style={styles.categoryIcon} resizeMode="contain" />
      <Text style={styles.categoryText}>{label}</Text>
    </TouchableOpacity>
  );
}

// ================== HOME SCREEN ==================
function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Header */}
        <View style={styles.homeHeader}>
          <View style={styles.homeTopRow}>
            <Image source={IMAGES.avatar} style={styles.headerAvatar} resizeMode="cover" />

            <Image
              source={IMAGES.locationBlock}
              style={styles.locationBlockImg}
              resizeMode="contain"
            />

            <TouchableOpacity style={styles.bellCircle}>
              <Image source={IMAGES.bellIcon} style={styles.bellIcon} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search */}
        <View style={styles.homeBody}>
          <SearchBar />

          {/* Categories */}
          <View style={styles.categoryRow}>
            <CategoryCard active icon={IMAGES.catPizza} label="PIZZA" />
            <CategoryCard icon={IMAGES.catBurger} label="BURGER" />
            <CategoryCard icon={IMAGES.catDrink} label="DRINK" />
            <CategoryCard icon={IMAGES.catRici} label="RICI" />
          </View>

          {/* Promo */}
          <View style={styles.promoBanner}>
            <View style={styles.promoLeft}>
              <Text style={styles.promoTitle}>BURGER</Text>
              <Text style={styles.promoSub}>Today's Hot offer</Text>

              <View style={styles.smallRatingRow}>
                <Text style={styles.peopleText}>👥👥👥</Text>
                <Text style={styles.smallStar}>⭐</Text>
                <Text style={styles.smallRateText}>4.9 (3k+ Rating)</Text>
              </View>
            </View>

            <View style={styles.offerBadge}>
              <Text style={styles.offerBadgeText}>10%</Text>
              <Text style={styles.offerBadgeText}>OFF</Text>
            </View>

            <Image source={IMAGES.burgerHero} style={styles.promoBurger} resizeMode="cover" />
          </View>

          {/* Dots */}
          <View style={styles.dotRow}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          {/* Popular */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Items</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>

          <Image source={IMAGES.popularItems} style={styles.popularItemsImg} resizeMode="stretch" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ================== CART SCREEN ==================
function CartScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 18 }}
      >
        {/* Header */}
        <View style={styles.cartHeader}>
          <TouchableOpacity>
            <Image source={IMAGES.backIcon} style={styles.headerSmallIcon} resizeMode="contain" />
          </TouchableOpacity>

          <Text style={styles.cartHeaderTitle}>Shopping Cart</Text>

          <TouchableOpacity>
            <Image source={IMAGES.deleteIcon} style={styles.headerSmallIcon} resizeMode="contain" />
          </TouchableOpacity>
        </View>

        {/* Hero */}
        <View style={styles.cartHeroCard}>
          <View style={styles.offerBadgeCart}>
            <Text style={styles.offerBadgeText}>10%</Text>
            <Text style={styles.offerBadgeText}>OFF</Text>
          </View>

          <Image source={IMAGES.burgerHero} style={styles.cartHeroImage} resizeMode="cover" />

          <Image source={IMAGES.thumbsRow} style={styles.thumbsRowImg} resizeMode="stretch" />
        </View>

        <View style={styles.cartContent}>
          {/* Title + price */}
          <View style={styles.titlePriceRow}>
            <Text style={styles.cartFoodTitle}>BURGER</Text>
            <Image source={IMAGES.price28} style={styles.priceImg} resizeMode="contain" />
          </View>

          {/* Rating + qty */}
          <View style={styles.ratingQtyRow}>
            <Image source={IMAGES.ratingBlock} style={styles.ratingBlockImg} resizeMode="contain" />
            <Image source={IMAGES.qtyControl} style={styles.qtyControlImg} resizeMode="contain" />
          </View>

          {/* Address + call */}
          <View style={styles.addressRow}>
            <Image source={IMAGES.addressCard} style={styles.addressCardImg} resizeMode="stretch" />
            <Image source={IMAGES.callSquare} style={styles.callSquareImg} resizeMode="contain" />
          </View>

          {/* Payment */}
          <Image source={IMAGES.paymentMethod} style={styles.paymentImg} resizeMode="stretch" />

          {/* Summary */}
          <Image source={IMAGES.checkoutSummary} style={styles.summaryImg} resizeMode="stretch" />

          {/* Confirm */}
          <Image source={IMAGES.confirmOrderBtn} style={styles.confirmOrderImg} resizeMode="stretch" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ================== INDEX SCREEN ==================
function IndexScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.indexWrap}>
        <Image source={IMAGES.burgerText} style={styles.burgerWord} resizeMode="contain" />
        <Text style={styles.indexText}>INDOX Screen</Text>
      </View>
    </SafeAreaView>
  );
}

// ================== PROFILE ROW ==================
function ProfileRow({ icon, title, isDarkMode }) {
  return (
    <View style={styles.profileRow}>
      <View style={styles.profileRowLeft}>
        <Image source={icon} style={styles.profileMenuIcon} resizeMode="contain" />
        <Text style={styles.profileRowText}>{title}</Text>
      </View>

      {isDarkMode ? (
        <Image source={IMAGES.darkToggle} style={styles.darkToggleImg} resizeMode="contain" />
      ) : (
        <Image source={IMAGES.menuArrow} style={styles.arrowImg} resizeMode="contain" />
      )}
    </View>
  );
}

// ================== PROFILE SCREEN ==================
function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 18 }}
      >
        {/* Header */}
        <View style={styles.profileHeader}>
          <TouchableOpacity>
            <Image source={IMAGES.backIcon} style={styles.headerSmallIcon} resizeMode="contain" />
          </TouchableOpacity>

          <Text style={styles.profileHeaderTitle}>Profile</Text>
          <View style={{ width: 18 }} />
        </View>

        {/* Top bg */}
        <Image source={IMAGES.profileTopBg} style={styles.profileTopBgImg} resizeMode="stretch" />

        {/* Avatar */}
        <View style={styles.profileAvatarWrap}>
          <Image source={IMAGES.avatar} style={styles.profileAvatar} resizeMode="contain" />

          <TouchableOpacity style={styles.editCircle}>
            <Image source={IMAGES.editIcon} style={styles.editIconImg} resizeMode="contain" />
          </TouchableOpacity>
        </View>

        {/* Info */}
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Rakibul Hasan</Text>
          <Text style={styles.profileEmail}>rakibbroinhd@gmail.com</Text>
        </View>

        {/* Menu */}
        <View style={styles.profileMenuList}>
          <ProfileRow icon={IMAGES.menuHome} title="Home" />
          <ProfileRow icon={IMAGES.menuCard} title="My Card" />
          <ProfileRow icon={IMAGES.menuDark} title="Dark Mood" isDarkMode />
          <ProfileRow icon={IMAGES.menuTrack} title="Truck Your Order" />
          <ProfileRow icon={IMAGES.menuSettings} title="Settings" />
          <ProfileRow icon={IMAGES.menuHelp} title="Help Center" />
        </View>

        {/* Logout */}
        <View style={styles.logoutWrap}>
          <Image source={IMAGES.logoutBtn} style={styles.logoutImg} resizeMode="stretch" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ================== APP ==================
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon source={IMAGES.tabHome} label="HOME" focused={focused} />
            ),
          }}
        />

        <Tab.Screen
          name="Order"
          component={CartScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon source={IMAGES.tabOrder} label="ORDER" focused={focused} />
            ),
          }}
        />

        <Tab.Screen
          name="Index"
          component={IndexScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon source={IMAGES.tabIndex} label="INDOX" focused={focused} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon source={IMAGES.tabProfile} label="PROFILE" focused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },

  // ================= TAB BAR =================
  tabBar: {
    height: 72,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0,
    elevation: 0,
    paddingTop: 8,
    paddingBottom: 8,
  },

  tabIconWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 72,
  },

  tabIcon: {
    width: 22,
    height: 22,
    marginBottom: 2,
  },

  tabLabel: {
    fontSize: 8,
    fontWeight: "700",
    lineHeight: 10,
  },

  // ================= HOME =================
  homeHeader: {
    backgroundColor: COLORS.paleYellow,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 24,
  },

  homeTopRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },

  locationBlockImg: {
    flex: 1,
    height: 46,
    marginHorizontal: 10,
  },

  bellCircle: {
    width: 44,
    height: 102,
    alignItems: "center",
    justifyContent: "center",
  },

  bellIcon: {
    width: 42,
    height: 42,
  },

  homeBody: {
    paddingHorizontal: 14,
  },

  searchBar: {
    height: 54,
    marginTop: -18,
    borderRadius: 27,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    marginBottom: 18,
  },

  searchIcon: {
    color: "#FFFFFF",
    fontSize: 18,
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
    paddingVertical: 0,
  },

  searchFilter: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  categoryCard: {
    width: (width - 28 - 18) / 4,
    height: 92,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },

  categoryCardActive: {
    backgroundColor: COLORS.greenActive,
  },

  categoryIcon: {
    width: 28,
    height: 28,
    marginBottom: 8,
  },

  categoryText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#111",
  },

  promoBanner: {
    height: 158,
    borderRadius: 5,
    backgroundColor: "#0C0C0C",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#E8C10B",
    flexDirection: "row",
  },

  promoLeft: {
    flex: 1,
    paddingLeft: 14,
    paddingTop: 12,
    paddingBottom: 10,
  },

  promoTitle: {
    color: COLORS.yellow,
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 32,
  },

  promoSub: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 4,
  },

  smallRatingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  peopleText: {
    fontSize: 10,
  },

  smallStar: {
    fontSize: 12,
    marginLeft: 4,
    marginRight: 4,
  },

  smallRateText: {
    color: "#FFFFFF",
    fontSize: 10,
  },

  offerBadge: {
    position: "absolute",
    right: 92,
    top: 14,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },

  offerBadgeCart: {
    position: "absolute",
    left: 14,
    top: 14,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  },

  offerBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
    lineHeight: 11,
  },

  promoBurger: {
    width: 132,
    height: "100%",
  },

  dotRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 14,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: "#DADADA",
    marginHorizontal: 4,
  },

  dotActive: {
    backgroundColor: "#AFAFAF",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },

  viewAll: {
    fontSize: 13,
    color: "#707070",
    fontWeight: "600",
  },

  popularItemsImg: {
    width: "98%",
    height: 220,
    alignItems: "center"
  },

  // ================= CART =================
  cartHeader: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  headerSmallIcon: {
    width: 18,
    height: 18,
  },

  cartHeaderTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },

  cartHeroCard: {
    marginHorizontal: 16,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#F8F8F8",
  },

  cartHeroImage: {
    width: "100%",
    height: 188,
  },

  thumbsRowImg: {
    width: "100%",
    height: 70,
    backgroundColor: "#FFFFFF",
  },

  cartContent: {
    paddingHorizontal: 16,
    paddingTop: 14,
  },

  titlePriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cartFoodTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#111",
    lineHeight: 28,
  },

  priceImg: {
    width: 48,
    height: 24,
  },

  ratingQtyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },

  ratingBlockImg: {
    width: 112,
    height: 20,
  },

  qtyControlImg: {
    width: 84,
    height: 28,
  },

  addressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  addressCardImg: {
    width: width - 16 - 16 - 60 - 10,
    height: 68,
  },

  callSquareImg: {
    width: 54,
    height: 70,
  },

  paymentImg: {
    width: "100%",
    height: 60,
    marginTop: 10,
  },

  summaryImg: {
    width: "98%",
    height: 130,
    marginTop: 10,
  },

  confirmOrderImg: {
    width: "100%",
    height: 56,
    marginTop: 16,
  },

  // ================= INDEX =================
  indexWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  burgerWord: {
    width: 180,
    height: 50,
    marginBottom: 16,
  },

  indexText: {
    fontSize: 24,
    fontWeight: "800",
    color: COLORS.primary,
  },

  // ================= PROFILE =================
  profileHeader: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  profileHeaderTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },

  profileTopBgImg: {
    width: "100%",
    height: 118,
  },

  profileAvatarWrap: {
    alignSelf: "center",
    marginTop: -48,
    position: "relative",
  },

  profileAvatar: {
    width: 118,
    height: 118,
  },

  editCircle: {
    position: "absolute",
    right: 10,
    bottom: 14,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  editIconImg: {
    width: 12,
    height: 12,
  },

  profileInfo: {
    alignItems: "center",
    marginTop: 8,
  },

  profileName: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111",
  },

  profileEmail: {
    marginTop: 4,
    fontSize: 13,
    color: "#777",
  },

  profileMenuList: {
    marginTop: 16,
    paddingHorizontal: 16,
  },

  profileRow: {
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profileRowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileMenuIcon: {
    width: 18,
    height: 18,
    marginRight: 14,
  },

  profileRowText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#111",
  },

  arrowImg: {
    width: 12,
    height: 12,
    transform: [{ rotate: "180deg" }],
    opacity: 0.7,
  },

  darkToggleImg: {
    width: 48,
    height: 28,
  },

  logoutWrap: {
    paddingHorizontal: 16,
    marginTop: 18,
    marginBottom: 12,
  },

  logoutImg: {
    width: "100%",
    height: 56,
  },
});