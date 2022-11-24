<template>
  <!-- Begin page -->
  <div id="wrapper">
    <!-- Top Bar Start -->
    <div class="topbar">
      <!-- LOGO -->
      <div class="topbar-left">
        <a href="/" class="logo">
          <span class="logo-light">
            <i class="mdi mdi-camera-control"></i> Qinnotek
          </span>
          <span class="logo-sm">
            <i class="mdi mdi-camera-control"></i>
          </span>
        </a>
      </div>
      <nav class="navbar-custom">
        <ul class="navbar-right list-inline float-right mb-0">
          <!-- language-->
          <li
            class="dropdown notification-list list-inline-item d-none d-md-inline-block"
          >
            <a
              class="nav-link dropdown-toggle arrow-none waves-effect"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src="assets/images/korea_flag.jpg"
                class="mr-2"
                height="12"
                alt=""
              />
              한국어 <span class="mdi mdi-chevron-down"></span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right dropdown-menu-animated language-switch"
            >
              <a class="dropdown-item" href="#"
                ><img
                  src="assets/images/us_flag.jpg"
                  alt=""
                  height="16"
                /><span> English </span></a
              >
              <a class="dropdown-item" href="#"
                ><img
                  src="assets/images/french_flag.jpg"
                  alt=""
                  height="16"
                /><span> French </span></a
              >
              <a class="dropdown-item" href="#"
                ><img
                  src="assets/images/spain_flag.jpg"
                  alt=""
                  height="16"
                /><span> Spanish </span></a
              >
              <a class="dropdown-item" href="#"
                ><img
                  src="assets/images/russia_flag.jpg"
                  alt=""
                  height="16"
                /><span> Russian </span></a
              >
              <a class="dropdown-item" href="#"
                ><img
                  src="assets/images/germany_flag.jpg"
                  alt=""
                  height="16"
                /><span> German </span></a
              >
              <a class="dropdown-item" href="#"
                ><img
                  src="assets/images/italy_flag.jpg"
                  alt=""
                  height="16"
                /><span> Italian </span></a
              >
            </div>
          </li>
          <!-- full screen -->
          <li
            class="dropdown notification-list list-inline-item d-none d-md-inline-block"
          >
            <a class="nav-link waves-effect" href="#" id="btn-fullscreen">
              <i class="mdi mdi-arrow-expand-all noti-icon"></i>
            </a>
          </li>
          <!-- notification -->
          <li class="dropdown notification-list list-inline-item">
            <a
              class="nav-link dropdown-toggle arrow-none waves-effect"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i class="mdi mdi-bell-outline noti-icon"></i>
              <span class="badge badge-pill badge-danger noti-icon-badge"
                >3</span
              >
            </a>
            <div
              class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-lg px-1"
            >
              <!-- item-->
              <h6 class="dropdown-item-text">Notifications</h6>
              <div class="slimscroll notification-item-list">
                <!-- item-->
                <a
                  href="javascript:void(0);"
                  class="dropdown-item notify-item active"
                >
                  <div class="notify-icon bg-success">
                    <i class="mdi mdi-cart-outline"></i>
                  </div>
                  <p class="notify-details">
                    <b>Your order is placed</b
                    ><span class="text-muted"
                      >Dummy text of the printing and typesetting
                      industry.</span
                    >
                  </p>
                </a>
                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-danger">
                    <i class="mdi mdi-message-text-outline"></i>
                  </div>
                  <p class="notify-details">
                    <b>New Message received</b
                    ><span class="text-muted">You have 87 unread messages</span>
                  </p>
                </a>
                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-info">
                    <i class="mdi mdi-filter-outline"></i>
                  </div>
                  <p class="notify-details">
                    <b>Your item is shipped</b
                    ><span class="text-muted"
                      >It is a long established fact that a reader will</span
                    >
                  </p>
                </a>
                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-success">
                    <i class="mdi mdi-message-text-outline"></i>
                  </div>
                  <p class="notify-details">
                    <b>New Message received</b
                    ><span class="text-muted">You have 87 unread messages</span>
                  </p>
                </a>
                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-warning">
                    <i class="mdi mdi-cart-outline"></i>
                  </div>
                  <p class="notify-details">
                    <b>Your order is placed</b
                    ><span class="text-muted"
                      >Dummy text of the printing and typesetting
                      industry.</span
                    >
                  </p>
                </a>
              </div>
              <!-- All-->
              <a
                href="javascript:void(0);"
                class="dropdown-item text-center notify-all text-primary"
              >
                View all <i class="fi-arrow-right"></i>
              </a>
            </div>
          </li>
          <li class="dropdown notification-list list-inline-item">
            <div class="dropdown notification-list nav-pro-img">
              <a
                class="dropdown-toggle nav-link arrow-none nav-user"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  src="assets/images/user-4.jpg"
                  alt="user"
                  class="rounded-circle"
                />
              </a>
              <div class="dropdown-menu dropdown-menu-right profile-dropdown">
                <!-- item-->
                <a class="dropdown-item" href="#"
                  ><i class="mdi mdi-account-circle"></i> Profile</a
                >
                <a class="dropdown-item" href="#"
                  ><i class="mdi mdi-wallet"></i> Wallet</a
                >
                <a class="dropdown-item d-block" href="#"
                  ><span class="badge badge-success float-right">11</span
                  ><i class="mdi mdi-settings"></i> Settings</a
                >
                <a class="dropdown-item" href="#"
                  ><i class="mdi mdi-lock-open-outline"></i> Lock screen</a
                >
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-danger" href="#"
                  ><i class="mdi mdi-power text-danger"></i> Logout</a
                >
              </div>
            </div>
          </li>
        </ul>
        <ul class="list-inline menu-left mb-0">
          <li class="float-left">
            <button class="button-menu-mobile open-left waves-effect">
              <i class="mdi mdi-menu"></i>
            </button>
          </li>
          <li class="d-none d-md-inline-block">
            <form role="search" class="app-search">
              <div class="form-group mb-0">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search.."
                />
                <button type="submit"><i class="fa fa-search"></i></button>
              </div>
            </form>
          </li>
        </ul>
      </nav>
    </div>
    <!-- Top Bar End -->
    <!-- ========== Left Sidebar Start ========== -->
    <div class="left side-menu">
      <div class="slimscroll-menu" id="remove-scroll">
        <!--- Sidemenu -->
        <div id="sidebar-menu">
          <!-- Left Menu Start -->
          <ul class="metismenu" id="side-menu">
            <li class="menu-title">- 사용자 메뉴 -</li>
            <li>
              <router-link to="/dashboard"
                ><i class="icon-accelerator"></i><span>대시보드</span
                ><span class="badge badge-success badge-pill float-right"
                  >9+</span
                >
              </router-link>
            </li>
            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-home"></i
                ><span>
                  사용자 관리
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i
                  ></span> </span
              ></a>
              <ul class="submenu">
                <li><router-link to="/notice">공지사항</router-link></li>
                <li><a href="#">개인정보수정</a></li>
              </ul>
            </li>

            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-paper-sheet"></i
                ><span>
                  기준정보
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i
                  ></span> </span
              ></a>
              <ul class="submenu">
                <li><a href="#">사용자 등록</a></li>
                <li><a href="#">설비 등록</a></li>
                <li><a href="#">설비부품 등록</a></li>
              </ul>
            </li>

            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-pencil-ruler"></i>
                <span>
                  생산관리
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i
                  ></span>
                </span>
              </a>
              <ul class="submenu">
                <li><a href="#">영업관리</a></li>
                <li><a href="#">생산계획</a></li>
                <li><a href="#">작업지시</a></li>
                <li><a href="#">생산 계획 작업 실적</a></li>
                <li><a href="#">불량재작업등록</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-diamond"></i>
                <span>
                  설비관리
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i
                  ></span>
                </span>
              </a>
              <ul class="submenu">
                <li><a href="#">설비관리대장</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-todolist-check"></i
                ><span>
                  예방보전
                  <span class="badge badge-pill badge-danger float-right"
                    >8</span
                  >
                </span></a
              >
              <ul class="submenu">
                <li><a href="#">계획</a></li>
                <li><a href="#">통보</a></li>
                <li><a href="#">설비 I/F ITM라인</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-graph"></i
                ><span>
                  모니터링
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i
                  ></span> </span
              ></a>
              <ul class="submenu">
                <li><a href="#">종합현황</a></li>
                <li><a href="#">종합 OEE 현황</a></li>
                <li>
                  <a href="#">일간 KPI 현황 <br />(가동률, MTTR, MTBF)</a>
                </li>
                <li>
                  <a href="#">월간 KPI 현황 <br />(가동률, MTTR, MTBF)</a>
                </li>
                <li>
                  <a href="#">연간 KPI 현황 <br />(가동률, MTTR)</a>
                </li>
                <li><a href="#">설비가동현황</a></li>
                <li><a href="#">설비수리현황</a></li>
                <li><a href="#">설비일상점검현황</a></li>
                <li><a href="#">설비예방보전현황</a></li>
                <li><a href="#">설비MTBF현황</a></li>
                <li><a href="#">설비MTTR현황</a></li>
                <li><a href="#">설비OEE현황</a></li>
                <li><a href="#">설비생산현황</a></li>
                <li><a href="#">설비NG현황</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-spread"></i
                ><span>
                  재고관리
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i
                  ></span> </span
              ></a>
              <ul class="submenu">
                <li><a href="#">부품</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-coffee"></i>
                <span>
                  현장 시스템
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i></span
                ></span>
              </a>
              <ul class="submenu">
                <li><a href="#">설비점검</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-map"></i
                ><span>
                  기타
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i
                  ></span> </span
              ></a>
              <ul class="submenu">
                <li><a href="#">일간 로그 현황 조회</a></li>
                <li><a href="#">월간 로그 현황 조회</a></li>
                <li><a href="#">조회</a></li>
                <li><a href="#">에러로그</a></li>
              </ul>
            </li>
            <li class="menu-title">- 관리자 메뉴 -</li>
            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-share"></i
                ><span>
                  관리자 설정
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i
                  ></span> </span
              ></a>
              <ul class="submenu">
                <li><a href="#">시스템 관리</a></li>
                <li><a href="#">권한 관리</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- Sidebar -->
        <div class="clearfix"></div>
      </div>
      <!-- Sidebar -left -->
    </div>
    <!-- Left Sidebar End -->

    <router-view />
  </div>
  <!-- END wrapper -->
</template>

<script></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  color: #ffffff;
  margin-top: 60px;
}
</style>
